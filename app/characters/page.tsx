import Link from "next/link"

const Characters = () => {
  const sunrioCharacters = ["Hello Kitty", "Cinnamoroll", "My Melody", "Kuromi", "Pompompurin", "Little Twin Stars"]

  return (
    <div>
      <h1>Welcome - Sunrio characters</h1>
      <div className="flex gap-4 justify-center m-4 flex-wrap">
        {sunrioCharacters.map(character => (
          <div key={character}>
            <Link href={`characters/${character.replace(/\s+/g, "")}`}>
              <h2>{character}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
