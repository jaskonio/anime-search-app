"use client";


import SearchAnime from "./searchAnime";


export default function AnimePanel() {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{backgroundImage: 'url("/placeholder.svg?height=600&width=1200")'}}>
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white shadow-text">
              Buscador de series de Anime
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-400 shadow-text">
              Explora miles de series de anime y encuentra tu próxima obsesión
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
              <SearchAnime searhValue=""></SearchAnime>
          </div>
        </div>
      </div>
    </section>
  )
}