"use server";
import { GetNewSeries } from "@carlosnunezmx/animeflv";
import { HomeElement } from "@carlosnunezmx/animeflv/types/scrappers/main_page";
import { AnimeInfo } from "./definition";
import { getAnimeByTitle } from "./scrapper/AnimeFLV";
import { AnimeSearchResult } from "./scrapper/AnimeFLV/definition";



export async function fetchNewSeries() {
    try {
        const response: HomeElement[] = await GetNewSeries()

        const animesInfo: AnimeInfo[] = response.map((data:HomeElement) => {
            return {
                animeId: data.Id,
                description: data.Description,
                poster: data.Image,
                rating: data.Review,
                title: data.Title,
                type: data.Type
            }
        })

        return animesInfo
    }
    catch (error) {
        console.log(error)
    }

    return []
}

export async function searchByTitle(query: string) {
    try {
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

        return animesInfo
    }
    catch (error) {
        console.log(error)
    }

    return []
}
