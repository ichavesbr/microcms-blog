import NotAvailable from "@/components/NotAvailable"
import fetchData from "@/libs/fetchData"
import { APIProps } from "@/types/microcms"
import Image from "next/image"

const CategoryBtn = ({ category }: { category: string }) =>
  category ? <button className="py-1 px-4 bg-amber-500 rounded-2xl flex">{category}</button> : null

const Blog = async () => {
  const data = await fetchData()

  return (
    <div>
      <h1 className="text-center text-4xl my-8">SUNRIO CHARACTERS</h1>

      {data.contents.map((a: APIProps) => (
        <ul key={a.id} className="m-4 p-4 bg-amber-300 border-2">
          {a.title ? <h1 className="text-4xl">{a.title}</h1> : <NotAvailable />}

          {/* previne ataques XSS - nao recomendado criar componente para isso, deve receber o html da api direto */}
          {a.content ? <div dangerouslySetInnerHTML={{ __html: a.content }} className="py-4" /> : <NotAvailable />}

          {/* verifica se existe eyecatch na api */}
          {a.eyecatch ? <Image src={a.eyecatch?.url} alt={a.title} width={300} height={400} /> : <NotAvailable />}

          {/* verifica se existe categoria na api */}
          {a.category ? (
            <div className="my-4">
              <CategoryBtn category={a.category.name} />
            </div>
          ) : null}
        </ul>
      ))}
    </div>
  )
}

export default Blog
