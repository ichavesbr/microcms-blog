import { NextRequest, NextResponse } from "next/server"
import fetchData from "@/libs/fetchData"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("q") || ""
  const queries = q ? { q } : {}
  try {
    const data = await fetchData(queries)
    return NextResponse.json({ contents: data })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 })
  }
}
