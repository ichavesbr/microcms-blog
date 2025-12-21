import { client } from "@/libs/client"

const fetchData = async () => {
  try {
    const data = await client.get({ endpoint: "blogs" })
    return data.contents
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export default fetchData

const fetchAuthors = async () => {
  try {
    const data = await client.get({ endpoint: "authors" })
    return data.contents
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export { fetchAuthors }

const fetchAuthors2 = async () => {
  try {
    const data = await client.get({ endpoint: "authors2" })
    return data.contents
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export { fetchAuthors2 }
