import fetchData from "@/libs/fetchData"
import removeSpace from "@/libs/removeSpace"
import Link from "next/link"
import { APIProps } from "@/types/microcms"
import { notFound } from "next/navigation"

// transforma paginas dinamicas em estaticas no momento do build
export const generateStaticParams = async () => {
  const data = await fetchData()
  //ha um problema aqui. Se alguma propriedade da API for nula, nao renderiza o item.
  return data.contents.map((item: APIProps) => ({ slug: removeSpace(item.name) }))
}

const Character = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const data = await fetchData()

  const character = data.contents.find((item: APIProps) => removeSpace(item.name) === slug)
  //check if URL/slug is same as name, if not return 404 page
  if (!character) notFound()
  const { name, title, content } = character

  return (
    <div>
      <h1>{name} - Page</h1>
      <p>{title}</p>
      {/* por algum motivo se encapsular com tag <p> da erro de hidratacao. Mas <div> funciona ok */}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      <button>
        <Link href="/characters">BACK</Link>
      </button>
    </div>
  )
}

export default Character
