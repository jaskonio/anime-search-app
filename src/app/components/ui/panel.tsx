import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


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
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm" placeholder="Buscar anime..." type="search" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}