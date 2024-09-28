"use server";

import { AnimeInfo } from "@/lib/definition";
import AnimeCard from "../../components/ui/card";
import { fetchByTitle } from "@/lib/animeActions";

type ListResultsProps = {
    searchQuery: string
}

export default async function ListResults({ searchQuery}: ListResultsProps) {
    const data = await fetchByTitle(searchQuery)

    if (!data || data?.length == 0) {
        return "No hay resultados";
    }

    return (
        <>
            {
                data.map((data: AnimeInfo, index:number) => (
                    <AnimeCard key={index} data={data}></AnimeCard>
                ))
            }
        </>
    )
}

