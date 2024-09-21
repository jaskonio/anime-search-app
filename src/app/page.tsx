import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, TrendingUp, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white dark:bg-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUp className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl text-primary">AnimeSearch</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Explorar
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Mi Lista
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{backgroundImage: 'url("/placeholder.svg?height=600&width=1200")'}}>
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white shadow-text">
                  Descubre tu próximo anime favorito
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Series Populares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="p-0">
                    <img
                      alt={`Anime ${i} cover`}
                      className="w-full h-[200px] object-cover"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300`}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-2">Anime Title {i}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>4.5</span>
                      <span>|</span>
                      <Clock className="h-4 w-4" />
                      <span>24 eps</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Ver detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AnimeSearch. Todos los derechos reservados.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="#">
                Términos de Servicio
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400" href="#">
                Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}