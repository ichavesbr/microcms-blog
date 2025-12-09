import Link from "next/link"

const Character = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params

  console.log(slug)

  return (
    <div>
      <h1>{slug} - Page</h1>
      <button>
        <Link href="/characters">BACK</Link>
      </button>
      {/* <button onClick={router.back}>BACK</button> */}
    </div>
  )
}

export default Character
