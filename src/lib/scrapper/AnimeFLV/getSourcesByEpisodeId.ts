"use server";

import { GetResources } from "@carlosnunezmx/animeflv";
import { ValidationError } from "./errors";
import { EpisodeDetail } from "./definition";


function extractParts(str: string) {
    const match = str.match(/\d{1,4}$/);
    
    if (match) {
        const nonMatchingPart = str.slice(0, match.index);
        return [nonMatchingPart, match[0]]
    }

    return []
}

export async function getSourcesByEpisodeId(episodeId: string): Promise<EpisodeDetail | null> {
    if (!episodeId)
        throw new ValidationError("Se requiere un Id para buscar el episodio", { episodeId: true })

    try {
        const results = await GetResources(episodeId)
        const [baseEpisodeId, episodeNumber] = extractParts(episodeId)

        const episodesDetails: EpisodeDetail = {
            Title: `Episode ${episodeNumber}`,
            EpisodeNumber: Number(episodeNumber),
            NextEpisodeId: baseEpisodeId + (Number(episodeNumber) + 1).toString(),
            PrevEpisodeId: episodeNumber == "1" ? "" : baseEpisodeId + (Number(episodeNumber) + -1).toString(),
            Servers: []
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