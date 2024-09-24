"use server";

import { GetAnimeInfo } from "@carlosnunezmx/animeflv";
import { AnimeDetail } from "./definition";
import { ValidationError } from "./errors";


export async function getAnimeById(animeId: string): Promise<AnimeDetail> {
    if (!animeId)
        throw new ValidationError("Se requiere un Id para buscar", { animeId: true })

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