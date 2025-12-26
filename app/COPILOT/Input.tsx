"use client"
import { useRouter, useSearchParams } from "next/navigation"

const Input = () => {
  const router = useRouter() // metodos de navegacao
  const searchParams = useSearchParams() // pega parametros da url

  // handle input changes and update URL parameters
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const params = new URLSearchParams(searchParams) // pega os parametros atuais

    if (value) params.set("param", value)
    else params.delete("param")
    router.replace(`?${params.toString()}`) // adiciona parametros na url sem recarregar a pagina
  }

  return (
    <input
      type="text"
      className="px-3 py-2 border"
      onChange={handleChange}
      defaultValue={searchParams.get("param") || ""} // valor inicial do input é o parametro atual da url
    />
  )
}

export { Input }
