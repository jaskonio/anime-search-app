import { Card, CardHeader, CardTitle } from "@/components/ui/card"

type EpisodeTitleProps = {
  animeTitle: string
  episodeNumber: number;
};

export function EpisodeTitle({ animeTitle, episodeNumber }: EpisodeTitleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          {animeTitle} - Episodio {episodeNumber}
        </CardTitle>
        {/* <p className="text-gray-500 dark:text-gray-400">{episodeTitle}</p> */}
      </CardHeader>
    </Card>
  )
}