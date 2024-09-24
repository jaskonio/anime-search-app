"use server";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSourcesByEpisodeId } from "@/lib/scrapper/AnimeFLV";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import { useState } from "react";


export default async function EpisodeView({ params }: { params: { id: string } }) {
  const id = params.id;
  const episode = await getSourcesByEpisodeId(id)


  const [selectedLanguage, setSelectedLanguage] = useState<'SUB' | 'LAT'>('SUB')
  // const currentServers = episode.Servers[0]
  // const currentServer = currentServers.find(server => server.server === selectedServer)
  const [selectedServer, setSelectedServer] = useState<string>('')

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
                        <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as 'SUB' | 'LAT')}>
                            <TabsList>
                                <TabsTrigger value="SUB">Subtitulado</TabsTrigger>
                                <TabsTrigger value="LAT">Latino</TabsTrigger>
                            </TabsList>
                            <TabsContent value="SUB">
                                <Select value={selectedServer} onValueChange={setSelectedServer}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecciona un servidor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {episode.Servers.map((server, index) => (
                                            <SelectItem key={index} value={server.ServerUrl}>
                                                {server.TypeServer}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </TabsContent>
                            {/* {episode.resources.LAT && (
                                <TabsContent value="LAT">
                                    <Select value={selectedServer} onValueChange={setSelectedServer}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecciona un servidor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {episode.resources.LAT.map((server) => (
                                                <SelectItem key={server.server} value={server.server}>
                                                    {server.title} {server.ads > 0 && `(${server.ads} anuncios)`}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TabsContent>
                            )} */}
                        </Tabs>
                    </CardContent>
                </Card>

                {true && (
                    <Card className="mb-6">
                        <CardContent className="p-0">
                            <iframe
                            id="inlineFrameExample"
                            title="Inline Frame Example"
                            width="w-full"
                            height="h-full"
                            src={episode.Servers[1].ServerUrl}
                            className="aspect-w-16 aspect-h-9">
                            </iframe>
                        </CardContent>
                    </Card>
                )}

                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        disabled={episode.PrevEpisodeId == ''}
                        asChild
                    >
                        <Link href={`/episode/${episode.PrevEpisodeId}}`}>
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Episodio anterior
                        </Link>
                    </Button>
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