"use server";
import { GetAnimeInfo, GetNewSeries, GetResources, Search } from "@carlosnunezmx/animeflv";
import { HomeElement } from "@carlosnunezmx/animeflv/types/scrappers/main_page";
import { AnimeDetail, AnimeInfo, EpisodeDetail } from "./definition";


function extractParts(str: string) {
    const match = str.match(/\d{1,4}$/);
    
    if (match) {
        const nonMatchingPart = str.slice(0, match.index);
        return [nonMatchingPart, match[0]]
    }

    return []
}

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

export async function fetchByTitle(query: string) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const animeResults: any = await Search(query);

        const animesInfo: AnimeInfo[] = animeResults.map((item: HomeElement) => {
            return {
                animeId: item.Id,
                description: item.Description,
                poster: item.Image,
                rating: item.Review,
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

export async function fetchById(animeId: string): Promise<AnimeDetail> {
    if (!animeId)
        throw new Error("Se requiere un Id para buscar")

    const result = await GetAnimeInfo(animeId)
    
    return {
        Id: result.Id,
        Cover: result.Image,
        Description: result.Description,
        Genders: result.Genders,
        Rating: result.Reviews.Review,
        Title: result.Title,
        Type: result.Type,
        Episodes: result.Episodes.reverse(),
        Finalized: !result.OnGoing
    }
}

export async function fetchEpisodeDetails(episodeId: string): Promise<EpisodeDetail | null> {
    if (!episodeId)
        throw new Error("Se requiere un Id para buscar el episodio")

    try {
        const results = await GetResources(episodeId)
        const [baseEpisodeId, episodeNumber] = extractParts(episodeId)
        const anime = await fetchById(baseEpisodeId.slice(0, -1))

        const episodesDetails: EpisodeDetail = {
            Title: `Episode ${episodeNumber}`,
            EpisodeNumber: Number(episodeNumber),
            NextEpisodeId: baseEpisodeId + (Number(episodeNumber) + 1).toString(),
            PrevEpisodeId: episodeNumber == "1" ? "" : baseEpisodeId + (Number(episodeNumber) + -1).toString(),
            Servers: [],
            AnimeId: anime.Id,
            AnimeTitle: anime.Title,
        }

        if(results.LAT) {
            episodesDetails.Servers?.push(...results.LAT.map(episode => {
                return {
                    Language: 'LAT',
                    ServerCode: episode.code,
                    ServerName: episode.title,
                    ServerUrl: episode.code,
                    TypeServer: episode.server,
                }
            }))
        }
    
        episodesDetails.Servers?.push(...results.SUB?.map(episode => {
            return {
                Language: 'SUB',
                ServerCode: episode.code,
                ServerName: episode.title,
                ServerUrl: episode.code,
                TypeServer: episode.server,
            }
        }))
    
        return episodesDetails
    } catch (error) {
        console.log(error);
        return null
    }
}