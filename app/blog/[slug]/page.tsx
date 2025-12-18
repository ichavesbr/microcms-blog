"use client"

import { useParams } from "next/navigation"

const Slug = () => {
  const { slug } = useParams()
  return <h1>PAGINA DO BLOG - {slug}</h1>
}

export default Slug
