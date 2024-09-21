"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"


export default function SearchAnime() {
  const { replace } = useRouter()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log(event)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    replace("/search?query=" + formData.get('query'))
  }

    return (
    <form className="flex space-x-2" onSubmit={onSubmit}>
        <Input
            className="max-w-lg flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
            placeholder="Buscar anime..."
            type="search" 
            name="query"/>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
            <Search className="h-4 w-4 mr-2" />
            Buscar
        </Button>
    </form>
    )
}