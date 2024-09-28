"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Server } from "@/lib/scrapper/AnimeFLV/definition";


type ServerTabsProps = {
    resources: Server[]
    selectedServer: string;
    setSelectedServer: (server: string) => void
}

export default function ServerSelector({resources, selectedServer, setSelectedServer}: ServerTabsProps) {
    return (
        <Select value={selectedServer} onValueChange={setSelectedServer}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un servidor" />
            </SelectTrigger>
            <SelectContent>
                {resources?.map((server, index) => (
                    <SelectItem key={index} value={server.ServerUrl}>
                        {server.ServerName}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}