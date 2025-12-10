import fetchData from "@/libs/fetchData"
import removeSpace from "@/libs/removeSpace"
import Link from "next/link"

const Character = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const data = await fetchData()
  const currentCharacterData = data.contents.filter(item => removeSpace(item.name) === slug)
  const { name, title, content } = currentCharacterData[0]

  return (
    <div>
      <h1>{name} - Page</h1>
      <p>{title}</p>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>

      <button>
        <Link href="/characters">BACK</Link>
      </button>
      {/* <button onClick={router.back}>BACK</button> */}
    </div>
  )
}

export default Character
