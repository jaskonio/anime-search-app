import AnimeHeader from "./components/ui/header"
import AnimeFooter from "./components/ui/footer"
import AnimePanel from "./components/ui/panel"
import AnimeTopSeries from "./components/ui/newSeries"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <AnimeHeader></AnimeHeader>

      <main className="flex-1">
        <AnimePanel></AnimePanel>

        <AnimeTopSeries></AnimeTopSeries>
      </main>
      <AnimeFooter></AnimeFooter>
    </div>
  )
}