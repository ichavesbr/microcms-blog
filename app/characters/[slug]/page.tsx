import Image from "next/image"
import fetchData from "@/libs/fetchData"
import removeSpace from "@/libs/removeSpace"
import { APIProps } from "@/types/microcms"
import { notFound } from "next/navigation"
import { chango } from "@/app/layout"
import { albertSans } from "@/app/layout"

// transforma paginas dinamicas em estaticas no momento do build
// revalida a API a cada 60 segundos
export const revalidate = 60
export const generateStaticParams = async () => {
  const data = await fetchData()

  //ha um problema aqui. Se alguma propriedade da API for nula, nao renderiza o item.
  return data.map((item: APIProps) => ({
    slug: removeSpace(item.name),
  }))
}

const Character = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const data = await fetchData()
  const character = data.find((item: APIProps) => removeSpace(item.name) === slug)
  if (!character) notFound() // check if URL/slug is same as name, if not return 404 page
  const { name, title, content, eyecatch, publishedAt, category } = character

  const myPic = data.map(info => info.pictures.map(pic => pic?.url))

  const myurl = myPic[6][0]

  // Formata a data de publicação
  const formattedDate = new Date(publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  return (
    <div className={`${albertSans.className} bg-gray-50 min-h-screen`}>
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-amber-300 overflow-visible">
        <h1
          className={`pt-16 sm:pt-24 md:pt-32 lg:pt-40 text-center lg:text-left lg:pl-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${chango.className} tracking-widest`}>
          {name.toUpperCase()}
        </h1>
        {/* Imagem no Hero - esconde em mobile */}
        <div className="hidden md:block absolute right-8 lg:right-24 bottom-0 h-[85%]">
          <Image src={myurl} alt={name} width={800} height={600} className="h-full w-auto rounded-lg shadow-xl" />
        </div>
        {/* Imagem esquerda menor - parcialmente sobre a borda marrom */}
        <div className="absolute left-8 -bottom-2 sm:-bottom-3 lg:-bottom-4 z-10">
          <Image src={myurl} alt={name} width={800} height={600} className="h-28 w-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="h-8 sm:h-10 md:h-12 lg:h-14 bg-amber-950"></div>

      {/* Post Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>

        {/* Autor e data */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-200">
          <div className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center">
            <span className="text-amber-900 font-bold">A</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">Autor</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Conteúdo do post */}
        <div
          className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Categoria e Compartilhar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
          {/* Categoria */}
          {category && (
            <span className="px-3 py-1 text-sm font-medium bg-amber-100 text-amber-800 rounded-full">
              {category.name}
            </span>
          )}

          {/* Compartilhar */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 mr-1">Compartilhar:</span>
            {/* X (Twitter) */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Compartilhar no X">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              aria-label="Compartilhar no Facebook">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"
              aria-label="Compartilhar no LinkedIn">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-green-50 hover:text-green-600 transition-colors"
              aria-label="Compartilhar no WhatsApp">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Character
