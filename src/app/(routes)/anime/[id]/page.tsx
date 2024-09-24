"use server";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Play } from "lucide-react"
import { getAnimeById } from '@/lib/scrapper/AnimeFLV';
import Image from 'next/image'
import Link from "next/link"


export default async function AnimeDetails({ params }: { params: { id: string } }) {
    const id = params.id;
    const anime = await getAnimeById(id)

    const isFavorite = true

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{anime.Title}</h1>
    </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Card>
              <CardContent className="p-0">
                <Image
                  src={anime.Cover}
                  alt={`Portada de ${anime.Title}`}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-t-lg"
                />
              </CardContent>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-bold">{anime.Rating}</span>
                  </div>
                  <Button
                    variant={isFavorite ? "default" : "outline"}
                    size="sm"
                  >
                    <Heart className={`h-5 w-5 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                    {isFavorite ? 'Favorito' : 'Añadir a favoritos'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>Sinopsis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{anime.Description}</p>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Información</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="font-medium text-gray-500 dark:text-gray-400">Género</dt>
                    <dd className="mt-1">
                      {anime.Genders?.map((genre) => (
                        <Badge key={genre} className="mr-2 mb-2">{genre}</Badge>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500 dark:text-gray-400">Episodios</dt>
                    <dd className="mt-1">{anime.Episodes.length}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-500 dark:text-gray-400">Estado</dt>
                    <dd className="mt-1">{anime.Finalized ? "Finalizado": "En progreso"}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Sección de episodios */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Episodios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {anime.Episodes.map((episode, index) => (
                    <Link key={index} className="w-full" href={`/anime/episode/${episode.Id}`}>
                    <Button key={index} variant="outline" className="w-full justify-start">
                      <Play className="h-4 w-4 mr-2" />
                      Episodio {episode.Number}
                    </Button>
                    </Link>

                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}