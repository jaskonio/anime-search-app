"use server";

import { searchQuery } from "@/lib/animeActions";
import { AnimeInfo } from "@/lib/definition";
import AnimeCard from "./card";


export default async function AnimeResults({query}: {query: string}) {
    const results = await searchQuery(query)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((data: AnimeInfo, index:number) => (
            <AnimeCard key={index} data={data}></AnimeCard>
        ))}
        </div>
    )
}