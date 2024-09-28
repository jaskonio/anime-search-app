"use client"

import ServerSelector from "./serverSelector";
import { useState } from "react";
import { EpisodeDetail } from "@/lib/scrapper/AnimeFLV/definition";
import { EpisodeTitle } from "./episodeTitle";
import { VideoPlayer } from "./videoPlayer";
import PrevButton from "./prevButton";
import NextButton from "./nextButton";


type EpisodeViewProps = {
    episode: EpisodeDetail;
};

  
export default function EpisodeView({ episode }: EpisodeViewProps) {
    const [selectedServerUrl, setSelectedServer] = useState<string>(episode.Servers[0].ServerUrl)

    let selectedServer = episode.Servers.find(s => s.ServerUrl == selectedServerUrl)

    if (!selectedServer) {
        selectedServer = episode.Servers[0]
    }

    return (
        <>
            <EpisodeTitle
                episodeNumber={episode.EpisodeNumber}
            ></EpisodeTitle>
            <ServerSelector
                resources={episode.Servers}
                selectedServer={selectedServerUrl}
                setSelectedServer={setSelectedServer}
            ></ServerSelector>
            <div className="h-96">
                <VideoPlayer
                    src={selectedServer?.ServerUrl}
                    title={selectedServer?.TypeServer}
                ></VideoPlayer>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="">
                    {
                        episode.PrevEpisodeId != "" && <PrevButton episodeId={episode.PrevEpisodeId}></PrevButton>
                    }
                </div>
                <div className="col-span-2">
                </div>
                <div className="">
                    <NextButton episodeId={episode.NextEpisodeId}></NextButton>
                </div>
            </div>
        </>

    )
}