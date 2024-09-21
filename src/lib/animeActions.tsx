"use server";

import { GetNewSeries } from "@carlosnunezmx/animeflv";
import { HomeElement } from "@carlosnunezmx/animeflv/types/scrappers/main_page";
import { AnimeInfo } from "./definition";

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