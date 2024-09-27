"use client";

import { useRouter, useSearchParams } from "next/navigation"
import useSWR from 'swr';
import { AnimeInfo } from "@/lib/definition";
import AnimeCard from "../../components/ui/card";


const fetchSearchByTitles = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch get anime by titles");
    }

    return response.json();
};

export default function ListResults() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams ? searchParams.get("query") : null;
    const router = useRouter();

    if (!searchQuery) {
        router.push("/");
    }

    const encodedSearchQuery = encodeURI(searchQuery || "");

    const { data, isLoading } = useSWR(`/api/search/${encodedSearchQuery}`,
        fetchSearchByTitles,
        { revalidateOnFocus: false }
    );

    if (isLoading) {
        return "Cargando..";
    }

    if (!data || data?.results.length == 0) {
        return "No hay resultados";
    }

    return (
        <>
            {
                data.results.map((data: AnimeInfo, index:number) => (
                    <AnimeCard key={index} data={data}></AnimeCard>
                ))
            }
        </>
    )
}

