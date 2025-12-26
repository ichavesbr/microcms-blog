import fetchData from "@/libs/fetchData"

const userSearch = async (userInput: string) => {
  try {
    const queries = userInput ? { q: userInput } : {}
    const data = await fetchData(queries)
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export { userSearch }
