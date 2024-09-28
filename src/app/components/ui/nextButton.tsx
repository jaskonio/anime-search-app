import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


type NextButtonProps = {
    episodeId: string;
};

  
export default function NextButton({ episodeId }: NextButtonProps) {
    return (
        <Button
            className="w-full"
            variant="outline"
            asChild>
            <Link href={`/episode/${episodeId}`}>
                Siguiente episodio
                <ChevronRight className="mr-2 h-4 w-4" />
            </Link>
        </Button>
    )
}