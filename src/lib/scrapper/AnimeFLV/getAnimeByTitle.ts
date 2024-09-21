import { config }  from "./config";
import { AnimeSearchResult } from "./definition";
import { ValidationError } from "./errors";
import { fetchResource } from "./fetch";
// import { HTMLElement } from "node-html-parser";

// I tried it - I give up for filtering...
// function timeout(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }


// export type TitleType = 'tv' | 'movie' | 'special' | 'ova'
// export type Order = 'updated' | 'added' | 'title' | 'rating'
// export enum Emmision {
//     OnGoing,
//     Finished,
//     CommingSoon
// }
// export type SearchParams = Partial<{
//     year: number[] | number,
//     status: Emmision | Emmision[],
//     type: TitleType[] | TitleType,
//     page: number,
//     order: Order,
//     wait?: {
//         onPage: (page: number) => void,
//         seconds: number
//     }
//     allCatalog: boolean
// }> | string

// type Pages = {
//     first: number,
//     last: number
// }
// export type SearchResults =
//     HomeElement[] |
//     { Series: HomeElement[], Pages: Pages}

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

// async function Format(Series: HomeElement[], Pages: Pages, Query: SearchParams): Promise<HomeElement[]>{
//     if(typeof Query === "string")
//         return Series
    
//     for(let i = Pages.first; i <= Pages.last; i++){
//         const url = 
//         "/browse?" + new URLSearchParams({
//             page: i.toString()
//         }).toString();
//         if(process.env["DEBUG"])
//             console.info("[DEGUB] > Getting", url)
//         if (!Query.wait) {
//             const $$ = await fetchResource({ resource: config.baseURL + url })
//             const series = await GetNewSeries($$)
//             Series.push(...series)

//             continue;
//         }
//         await timeout((Query.wait.seconds * i) * 1000);
//         const $$ = await fetchResource({ resource: config.baseURL + url })
//         const series = await GetNewSeries($$)
//         Series.push(...series)
//         Query.wait?.onPage(i)
//     }

//     return Series;
// }