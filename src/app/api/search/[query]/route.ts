import { AnimeInfo } from "@/lib/definition";
import { getAnimeByTitle } from "@/lib/scrapper/AnimeFLV";
import { AnimeSearchResult } from "@/lib/scrapper/AnimeFLV/definition";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest, { params }: {params: {query: string}}) {
  try {
    const query = params.query

    console.log("GET SEARCH BY QUERY")

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

    return Response.json(animesInfo)
  }
  catch (error) {
    console.log(error);
    return []
  }
}