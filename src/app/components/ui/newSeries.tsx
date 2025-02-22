import { fetchNewSeries } from "@/lib/animeActions";
import AnimeCard from "./card";
import { AnimeInfo } from "@/lib/definition";


export default async function AnimeNewSeries() {
    const newSeries = await fetchNewSeries()

    return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
        <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Nuevas Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newSeries.map((data: AnimeInfo, index:number) => (
            <AnimeCard key={index} data={data}></AnimeCard>
            ))}
        </div>
        </div>
    </section>
    )
}