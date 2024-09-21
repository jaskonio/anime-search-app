"use client";

import { useSearchParams } from "next/navigation"
import AnimeResults from "../components/ui/resultSearch";

export default function Page() {
    const searchParams = useSearchParams()
    let query = searchParams.get('query')
    if (query == null) {
        query = ""
    }
    return (
        <AnimeResults query={query}></AnimeResults>
    )
}