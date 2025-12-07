import { Props } from "@/types/microcms"
import fetchData from "@/libs/fetchData"
import Link from "next/link"

export default async function Home() {
  const data = await fetchData()

  return (
    <div>
      <h1>Welcome</h1>
      <h2>To this blog</h2>
      <br />
      <div>
        {data.contents.map((a: Props) => (
          <ul key={a.id}>
            <li>{a.title}</li>
            <Link href={`/blog/`}>Read More</Link>
            {/* previne ataques XSS  */}
            <div dangerouslySetInnerHTML={{ __html: a.content }} />
          </ul>
        ))}
      </div>
    </div>
  )
}
