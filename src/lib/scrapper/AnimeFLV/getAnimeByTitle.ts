"use server";

import { config }  from "./config";
import { AnimeSearchResult } from "./definition";
import { ValidationError } from "./errors";
import { fetchResource } from "./fetch";


export async function getAnimeByTitle(Query: string): Promise<AnimeSearchResult[]> {
    if (!Query)
        throw new ValidationError("Se requiere una Query para buscar", { Query: true })

    const $ = await fetchResource({ resource: config.baseURL + config.search + '?q=' + Query });

    const $SeriesAnimeList = $.querySelectorAll(".ListAnimes li article.Anime")

    const Animes: AnimeSearchResult[] = [];

    $SeriesAnimeList.forEach($anime => {
        const Result: AnimeSearchResult = {
            Id: $anime.querySelector("a")?.getAttribute("href")?.replace("/anime/", "") ?? "",
            Cover: $anime.querySelector(".Image figure img")?.getAttribute("src") ?? "",
            Type: $anime.querySelector(".Image .Type")?.innerText ?? "",
            Title: $anime.querySelector(".Title")?.innerText ?? "",        
            Rating: Number($anime.querySelector(".Vts")?.innerText) ?? 0,
            Description: $anime.querySelectorAll(".Description p")[1].innerText,
        }

        Result.Cover = Result.Cover.includes('https://animeflv.net') ? Result.Cover : config.baseURL + Result.Cover;

        Animes.push(Result)
    })

    return Animes
}
