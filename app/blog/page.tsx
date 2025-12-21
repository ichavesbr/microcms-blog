import ShareLinks from "@/components/ShareLinks"
import fetchData from "@/libs/fetchData"
import { APIProps } from "@/types/microcms"
import Image from "next/image"

const Blog = async () => {
  const dataApi = await fetchData()

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <div className="flex gap-4 justify-center m-4 flex-wrap">oi</div>
        {dataApi.map((post: APIProps) => {
          console.log(post)
          const { author, author_img, date, title, content, hashtags } = post
          const hashtagsArray = hashtags ? hashtags.split(",") : []
          const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })

          return (
            <article key={title} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              {/* Título */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>

              {/* Autor e data */}
              <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-200">
                <Image
                  src={author_img.url}
                  alt={author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center"
                />

                <div>
                  <p className="font-medium text-gray-900">{author}</p>
                  <p className="text-sm text-gray-500">{formattedDate}</p>
                </div>
              </div>

              {/* Conteúdo do post */}
              <div
                className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Categoria e Compartilhar */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col  justify-between gap-4">
                {/* Categoria */}
                <div className="flex gap-4">
                  {hashtagsArray.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Compartilhar */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 mr-1">Compartilhar:</span>
                  <ShareLinks />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default Blog
