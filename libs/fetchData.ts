import { client } from "@/libs/client"

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
// TRATAR ERRO quando qualquer campo da API vier undefined (nao ha algum dado)
