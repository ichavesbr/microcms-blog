import fetchData from "@/libs/fetchData"
import { Props } from "@/types/microcms"
import Image from "next/image"
import Link from "next/link"

const Blog = async () => {
  const data = await fetchData()
  return (
    <div>
      <h1>PAGINA DO BLOG</h1>
      <Link href="/blog/post1">Ir para meu primeiro post</Link>

      {data.contents.map((a: Props) => (
        <ul key={a.id}>
          <h1>{a.title}</h1>
          <Link href={`/blog/`}>Read More</Link>
          {/* previne ataques XSS  */}
          <div dangerouslySetInnerHTML={{ __html: a.content }} />

          <Image src={a.eyecatch.url} alt={a.title} width={300} height={400} />
        </ul>
      ))}
    </div>
  )
}

export default Blog
