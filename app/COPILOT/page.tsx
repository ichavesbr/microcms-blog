import { fetchData } from "./fetchData"
import { FilteredSearch } from "./FilteredSearch"
import { Input } from "./Input"

export default async function Home() {
  const data = await fetchData()

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form>
        <Input /> {/* recebe dados e atualiza url */}
        <FilteredSearch data={data} />
      </form>
    </main>
  )
}
