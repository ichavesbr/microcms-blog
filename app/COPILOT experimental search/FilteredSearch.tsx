"use client"

import { useSearchParams } from "next/navigation"

const UnfilteredData = ({ data }) => {
  const unfilteredArray = data.map(({ id, title }) => <div key={id}>{title}</div>)

  return <div>{unfilteredArray}</div>
}

// filtered by title or content
const FilteredData = ({ data, params }) => {
  const filtered = data.filter(item => item.title.includes(params) || item.content.includes(params))
  const filteredArray = filtered.map(item => <p key={item.id}>{item.title}</p>)

  return <div>{filteredArray}</div>
}

const FilteredSearch = ({ data }) => {
  const params = useSearchParams().get("param") || ""

  return <>{params === "" ? <UnfilteredData data={data} /> : <FilteredData data={data} params={params} />}</>
}

export { FilteredSearch }
