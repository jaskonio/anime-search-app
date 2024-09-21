import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Clock } from "lucide-react"

export default function AnimeCard({ id }: { id: number }) {

    return (
        <Card key={id} className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <img
            alt={`Anime ${id} cover`}
            className="w-full h-[200px] object-cover"
            height="200"
            src={`/placeholder.svg?height=200&width=300`}
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold mb-2">Anime Title {id}</CardTitle>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>4.5</span>
            <span>|</span>
            <Clock className="h-4 w-4" />
            <span>24 eps</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">Ver detalles</Button>
        </CardFooter>
      </Card>
    )

}
