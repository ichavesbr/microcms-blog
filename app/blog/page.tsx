import fetchData from "@/libs/fetchData"
import { APIProps } from "@/types/microcms"
import Image from "next/image"
import Link from "next/link"

const Blog = async () => {
  const data = await fetchData()

  return (
    <div>
      <h1 className="text-center text-4xl my-8">SUNRIO CHARACTERS</h1>
      {/* <Link href="/blog/post1">Ir para meu primeiro post</Link> */}

      {data.contents.map((a: APIProps) => (
        <ul key={a.id} className="m-4 p-4 bg-amber-300 border-2">
          <h1 className="text-4xl">{a.title}</h1>

          {/* previne ataques XSS  */}
          <div dangerouslySetInnerHTML={{ __html: a.content }} className="py-4" />

          {/* verifica se existe eyecatch na api */}
          {a.eyecatch ? (
            <Image src={a.eyecatch?.url} alt={a.title} width={300} height={400} />
          ) : (
            <p>No image available</p>
          )}
        </ul>
      ))}
    </div>
  )
}

export default Blog
