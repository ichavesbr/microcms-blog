import fetchData from "@/libs/fetchData"

const FetchDataServer = async () => {
  const data = await fetchData()
  return data
}

export default FetchDataServer
