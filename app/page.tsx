import fetchData from "@/libs/fetchData"
import { APIProps } from "@/types/microcms"
import Image from "next/image"

export default async function Home() {
  const dataApi = await fetchData()

  // TODO: Implementar lógica para determinar se o post é novo
  const isNew = true // Altere para sua lógica (ex: comparar data do post com data atual)

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="flex flex-col gap-6">
          {dataApi.map((post: APIProps) => {
            const { author, author_img, date, title, content, hashtags } = post
            const hashtagsArray = hashtags ? hashtags.split(",") : []
            const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })

            return (
              // <article key={title} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              //   {/* Título */}
              //   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>

              //   {/* Autor e data */}
              //   <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-200">
              //     <Image
              //       src={author_img.url}
              //       alt={author}
              //       width={48}
              //       height={48}
              //       className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center"
              //     />

              //     <div>
              //       <p className="font-medium text-gray-900">{author}</p>
              //       <p className="text-sm text-gray-500">{formattedDate}</p>
              //     </div>
              //   </div>

              //   {/* Conteúdo do post */}
              //   <div
              //     className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-img:rounded-lg"
              //     dangerouslySetInnerHTML={{ __html: content }}
              //   />

              //   {/* Categoria e Compartilhar */}
              //   <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col  justify-between gap-4">
              //     {/* Categoria */}
              //     <div className="flex gap-4">
              //       {hashtagsArray.map(tag => (
              //         <span key={tag} className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
              //           {tag}
              //         </span>
              //       ))}
              //     </div>

              //     {/* Compartilhar */}
              //     <div className="flex items-center gap-2">
              //       <span className="text-sm text-gray-500 mr-1">Compartilhar:</span>
              //       {/* X (Twitter) */}
              //       <a
              //         href=""
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              //         aria-label="Compartilhar no X">
              //         <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              //           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              //         </svg>
              //       </a>
              //       {/* Facebook */}
              //       <a
              //         href=""
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              //         aria-label="Compartilhar no Facebook">
              //         <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              //           <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              //         </svg>
              //       </a>
              //       {/* LinkedIn */}
              //       <a
              //         href=""
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"
              //         aria-label="Compartilhar no LinkedIn">
              //         <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              //           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              //         </svg>
              //       </a>
              //       {/* WhatsApp */}
              //       <a
              //         href=""
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-green-50 hover:text-green-600 transition-colors"
              //         aria-label="Compartilhar no WhatsApp">
              //         <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              //           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              //         </svg>
              //       </a>
              //     </div>
              //   </div>
              // </article>
              <article key={title} className="overflow-hidden pb-6 border-b border-gray-200">
                {/* Container principal - imagem à esquerda, conteúdo à direita */}
                <div className="flex">
                  {/* Imagem */}
                  <a href={`/blog/${title}`} className="relative w-64 h-40 shrink-0">
                    <Image
                      src={author_img.url}
                      alt={title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                  {/* Conteúdo */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Título */}
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                        <a href={`/blog/${title}`} className="hover:text-amber-600 transition-colors">
                          {title}
                        </a>
                      </h2>
                      {isNew && (
                        <span className="text-red-500 text-base font-extrabold tracking-widest uppercase shrink-0">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Barra separadora */}
                    <div className="w-12 h-0.5 bg-amber-500 my-2"></div>

                    {/* Data */}
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(date)
                        .toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\//g, ".")}
                    </p>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-1">
                      {content.replace(/<[^>]*>/g, "").slice(0, 200)}...
                    </p>
                  </div>
                </div>

                {/* Botão - abaixo e à direita */}
                <div className="px-5 pb-4 flex justify-end">
                  <a
                    href={`/blog/${title}`}
                    className="inline-flex items-center px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded hover:bg-amber-600 transition-colors">
                    続きを読む
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
