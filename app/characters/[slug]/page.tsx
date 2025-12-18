import fetchData from "@/libs/fetchData"
import removeSpace from "@/libs/removeSpace"
import Link from "next/link"
import { APIProps } from "@/types/microcms"
import { notFound } from "next/navigation"
import Image from "next/image"
import NotAvailable from "@/components/NotAvailable"
import { chango } from "@/app/layout"
import { albertSans } from "@/app/layout"

// transforma paginas dinamicas em estaticas no momento do build
// revalida a API a cada 60 segundos
export const revalidate = 60
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
  const { name, title, content, eyecatch } = character

  return (
    <div className={`${albertSans.className}`}>
      <div className="h-96 bg-amber-300">
        <h1 className={`pt-40 text-center text-6xl ${chango.className} tracking-widest`}>{name.toUpperCase()}</h1>
      </div>
      <div className="h-14 bg-amber-950"></div>
      <h1 className="text-4xl">{title}</h1>

      {/* por algum motivo se encapsular com tag <p> da erro de hidratacao. Mas <div> funciona ok */}
      <div dangerouslySetInnerHTML={{ __html: content }} />

      {eyecatch ? <Image src={eyecatch.url} alt={title} width={300} height={400} /> : <NotAvailable />}

      <button>
        <Link href="/characters">BACK</Link>
      </button>
    </div>
  )
}

export default Character
