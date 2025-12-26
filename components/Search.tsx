"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Search = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (inputValue: string) => {
    const urlParams = new URLSearchParams(searchParams)
    if (inputValue) urlParams.set("query", inputValue)
    else urlParams.delete("query")
    replace(`${pathname}?${urlParams.toString()}`)
    onSearch(inputValue)
  }

  return (
    <div className="relative flex flex-1 shrink-0">
      <input
        placeholder="pesquise"
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="peer block w-full rounded-md border border-gray-200 py-2.25 pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
    </div>
  )
}

export { Search }
