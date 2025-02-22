"use server";

import EpisodeView from "@/app/components/ui/episodeView";
import { fetchEpisodeDetails } from "@/lib/animeActions";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const episode = await fetchEpisodeDetails(id)

    if (!episode) {
        return "No hay informacion del episodio"
    }

  return (
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <EpisodeView
                episode={episode}
                ></EpisodeView>
            
            <div className="flex justify-between">

            </div>
        </main>
  )
}