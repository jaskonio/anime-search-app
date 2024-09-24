import Link from "next/link"

export default function AnimeFooter() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AnimeSearch. Todos los derechos reservados.</p>
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
  )
}