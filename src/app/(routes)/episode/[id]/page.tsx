"use server";

import ServerTabs from "@/app/components/ui/serverTabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSourcesByEpisodeId } from "@/lib/scrapper/AnimeFLV";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";


export default async function EpisodeView({ params }: { params: { id: string } }) {
    const id = params.id;
    const episode = await getSourcesByEpisodeId(id)

    if (!episode) {
        return "No hay informacion del episodio"
    }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {episode.Title}
                        </h1>
                    </div>
                </header>
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>{episode.Title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ServerTabs episode={episode}></ServerTabs>
                        </CardContent>
                    </Card>

                    <div className="flex justify-between">
                        {
                            episode.PrevEpisodeId != "" &&
                            <Button
                                variant="outline"
                                disabled={false}
                                asChild>
                                <Link href={`/episode/${episode.PrevEpisodeId}}`}>
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Episodio anterior
                                </Link>
                            </Button>
                        }

                        <Button
                            variant="outline"
                            disabled={episode.NextEpisodeId == ''}
                            asChild
                        >
                            <Link href={`/episode/${episode.NextEpisodeId}`}>
                                Siguiente episodio
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </main>
    </div>
  )
}