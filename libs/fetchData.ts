import { client } from "@/libs/microcms"

const fetchData = async () => {
  try {
    const data = await client.get({ endpoint: "blogs" })
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export default fetchData
