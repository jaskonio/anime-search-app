import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimeInfo } from "@/lib/definition"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'


export default function AnimeCard( { data }: {data: AnimeInfo} ) {

    return (
        <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <Image
            src={data.poster}
            alt={`Anime ${data.title} cover`}
            className="w-full h-[200px] object-cover"
            width={300}
            height={200}
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold mb-2">{data.title}</CardTitle>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>{data.rating}</span>
            <span>|</span>
            <Badge variant="outline">{data.type}</Badge>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link className="w-full" href={`/anime/${data.animeId}`}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            + Info
            </Button>
          </Link>
        </CardFooter>
      </Card>
    )

}
