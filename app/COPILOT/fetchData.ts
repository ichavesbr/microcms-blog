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

export { fetchData }
