"use client"

import { useEffect, useState } from "react"
import { Search } from "@/components/Search"
import { APIProps } from "@/types/microcms"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [posts, setPosts] = useState<APIProps[]>([])
  const [loading, setLoading] = useState(true)
  const isNew = true

  // Toda vez que a pagina for carregada, busca a api e poe no state
  useEffect(() => {
    const fetchInitial = async () => {
      setLoading(true)
      const res = await fetch("/api/search")
      const json = await res.json()
      setPosts(json.contents || [])
      setLoading(false)
    }

    fetchInitial()
  }, [])

  // Função passada para Search
  const handleSearch = async (inputValue: string) => {
    setLoading(true)
    const res = await fetch(`/api/search?q=${encodeURIComponent(inputValue)}`)
    const json = await res.json()
    setPosts(json.contents || [])
    setLoading(false)
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="flex flex-col gap-6">
          <Search onSearch={handleSearch} />
          {loading ? (
            <div className="text-center py-8 text-gray-500">Carregando...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Nenhum post encontrado.</div>
          ) : (
            posts.map((post: APIProps) => {
              const { author, author_img, date, title, content, hashtags } = post
              return (
                <article key={title} className="overflow-hidden pb-6 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-3">
                    <Link
                      href={`/blog/${title}`}
                      className="relative w-full h-48 sm:w-48 sm:h-40 md:w-64 md:h-40 lg:w-72 lg:h-48 shrink-0 pl-4 pr-4 sm:pl-0 sm:pr-0">
                      <Image
                        src={author_img.url}
                        alt={title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="pt-0 pb-4 px-0 sm:p-5 flex flex-col flex-1 h-full justify-start">
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2">
                          <a href={`/blog/${title}`} className="hover:text-amber-600 transition-colors">
                            {title}{" "}
                            {isNew && (
                              <span className="text-red-500 text-base sm:text-lg font-extrabold tracking-widest uppercase shrink-0">
                                NEW
                              </span>
                            )}
                          </a>
                        </h2>
                      </div>
                      <div className="w-12 h-0.5 bg-amber-500 my-2"></div>
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(date)
                          .toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, ".")}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-1">
                        {content.replace(/<[^>]*>/g, "").slice(0, 200)}...
                      </p>
                      {hashtags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {hashtags.split(",").map((tag: string) => (
                            <span
                              key={tag.trim()}
                              className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs md:text-sm rounded-full font-semibold">
                              #{tag.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-5 pb-4 flex justify-end">
                    <Link
                      href={`/blog/${title}`}
                      className="inline-flex items-center px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded hover:bg-amber-600 transition-colors">
                      続きを読む
                    </Link>
                  </div>
                </article>
              )
            })
          )}
        </div>
      </div>
    </main>
  )
}
