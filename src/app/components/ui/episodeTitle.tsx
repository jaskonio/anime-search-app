import { Card, CardHeader, CardTitle } from "@/components/ui/card"

type EpisodeTitleProps = {
  episodeNumber: number;
};

export function EpisodeTitle({ episodeNumber }: EpisodeTitleProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Episodio {episodeNumber}
        </CardTitle>
        {/* <p className="text-gray-500 dark:text-gray-400">{episodeTitle}</p> */}
      </CardHeader>
    </Card>
  )
}