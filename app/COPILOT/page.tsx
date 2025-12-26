import { fetchData } from "./fetchData"
import { FilteredSearch } from "./FilteredSearch"
import { Input } from "./Input"

export default async function Home() {
  const data = await fetchData()

  // const myParam = searchParams?.param || ""
  // const filtered = myParam ? data.filter((item: any) => item.title.toLowerCase().includes(myParam.toLowerCase())) : data

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form>
        <Input /> {/* recebe dados e atualiza url */}
        <FilteredSearch data={data} />
        <div>
          {/* {filtered.map((item: any, index: number) => (
            <div key={item.id}>
              {index + 1} - {item.title} - {myParam}
            </div>
          ))} */}
        </div>
      </form>
    </main>
  )
}
