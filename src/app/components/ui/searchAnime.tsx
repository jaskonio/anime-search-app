"use client";


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"


type SearchAnimeProps = {
  searhValue: string;
}


export default function SearchAnime({ searhValue }: SearchAnimeProps) {
  const [searchQuery, setSearchQuery] = useState<string>(searhValue)
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  
    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search/${encodedSearchQuery}`);
  }

    return (
    <form className="flex space-x-2" onSubmit={onSubmit}>
      <Input
        value={searchQuery}
        className="max-w-lg flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
        placeholder="Buscar anime..."
        type="search" 
        name="query"
        onChange={(event) => setSearchQuery(event.target.value)}
      />

      <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
        <Search className="h-4 w-4 mr-2" />
        Buscar
      </Button>
    </form>
    )
}