"use client"

import { useSearchParams } from "next/navigation"

const UnfilteredData = ({ data }) => {
  return (
    <>
      {data.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  )
}

const FilteredData = ({ data, params }) => {
  return (
    <>
      {/* terminar outro dia: verificar se tem algum titulo, conteudo etc igual ao params */}
      {/* se sim, mostrar apenas os itens que forem iguais ao da pesquisa (params) */}
      {data.filter(item => {
        item.title.som === params ? item.title : <p>no data</p>
      })}
    </>
  )
}

const FilteredSearch = ({ data }) => {
  const params = useSearchParams().get("param") || ""

  return (
    <>
      <UnfilteredData data={data} />
      <FilteredData data={data} params={params} />
      <p>oi</p>
    </>
  )
}

export { FilteredSearch }
