import { TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AnimeHeader() {
  return (
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
  )
}