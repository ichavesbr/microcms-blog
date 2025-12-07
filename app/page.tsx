import { client } from "@/libs/microcms"
import { Contents } from "@/types/microcms"

export default async function Home() {
  const data = await client.get({ endpoint: "blogs" })
  console.log("RESULTADO:", data)

  return (
    <div>
      <h1>Welcome</h1>
      <h2>To this blog</h2>
      <div>
        {data.contents.map((a: Contents) => (
          <ul key={a.id}>
            <li>{a.title}</li>
            <li>{JSON.stringify(a.content)}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}
