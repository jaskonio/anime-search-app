"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EpisodeDetail } from "@/lib/scrapper/AnimeFLV/definition";
import { useState } from "react";


export default function ServerTabs({episode}: {episode: EpisodeDetail}) {
    const [selectedServer, setSelectedServer] = useState<string>(episode.Servers[0].ServerUrl)

    const currentServer = episode.Servers.find(server => server.ServerUrl === selectedServer)

    console.log(episode)
    return (
        <div>
            <Select value={selectedServer} onValueChange={setSelectedServer}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un servidor" />
                </SelectTrigger>
                <SelectContent>
                    {episode.Servers.map((server, index) => (
                        <SelectItem key={index} value={server.ServerUrl}>
                            {server.ServerName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {currentServer && (
                <Card className="mb-6">
                    <CardContent className="p-0 w-full">
                    <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        src={currentServer.ServerUrl}
                        height={500}
                        className="aspect-w-16 aspect-h-9 w-full">
                    </iframe>
                    </CardContent>
                </Card>
            )}
        </main>

        </div>
    )
}