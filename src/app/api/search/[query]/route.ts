import { AnimeInfo } from "@/lib/definition";
import { getAnimeByTitle } from "@/lib/scrapper/AnimeFLV";
import { AnimeSearchResult } from "@/lib/scrapper/AnimeFLV/definition";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: {params: {query: string}}) {
    try {
        const query = params.query

        console.log("GET SEARCH BY QUERY: ", query)

        const result: AnimeSearchResult[] = await getAnimeByTitle(query)

        const animesInfo: AnimeInfo[] = result.map((item) => {
            return {
                animeId: item.Id,
                description: item.Description,
                poster: item.Cover,
                rating: item.Rating,
                title: item.Title,
                type: item.Type
            }
        })

        return NextResponse.json({results: animesInfo})
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({error: error})
    }
}