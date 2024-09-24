export type AnimeSearchResult = {
    Id: string,
    Title: string,
    Description: string
    Rating:  number,
    Type: string,
    Cover: string,
}

export type Episode = {
    Id: string;
    Image: string;
    Number?: number;
};

export type AnimeDetail = {
    Title: string;
    Rating: number;
    Type: string;
    Cover: string;
    Id: string;
    Genders: string[] | undefined;
    Description: string;
    Episodes: Episode[];
    Finalized: boolean;
}

export type Server = {
    TypeServer: string;
    ServerName: string;
    ServerUrl: string;
    ServerCode: string;
    Language: string;
}

export type EpisodeDetail = {
    Title: string;
    Servers: Server[]
    AnimeId?: number;
    AnimeTitle?: string;
    EpisodeNumber: number;
    NextEpisodeId: string;
    PrevEpisodeId: string;
};