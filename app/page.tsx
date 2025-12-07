import { client } from "@/libs/microcms"
import { Props } from "@/types/microcms"

export default async function Home() {
  const data = await client.get({ endpoint: "blogs" })

  return (
    <div>
      <h1>Welcome</h1>
      <h2>To this blog</h2>
      <br />
      <div>
        {data.contents.map((a: Props) => (
          <ul key={a.id}>
            <li>{a.title}</li>
            {/* previne ataques XSS  */}
            <div dangerouslySetInnerHTML={{ __html: a.content }} />
          </ul>
        ))}
      </div>
    </div>
  )
}
