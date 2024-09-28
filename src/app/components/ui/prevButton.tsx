import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";


type PrevButtonProps = {
    episodeId: string;
};

  
export default function PrevButton({ episodeId }: PrevButtonProps) {
    return (
        <Button
            className="w-full"
            variant="outline"
            disabled={false}
            asChild>
            <Link href={`/episode/${episodeId}}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Episodio anterior
            </Link>
        </Button>
    )
}