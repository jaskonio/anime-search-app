"use client";

import ListResults from "@/app/components/ui/listCards";
import { useRouter, useSearchParams } from "next/navigation";


export default function Page() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams ? searchParams.get("query") : null;

    const router = useRouter();


    if (searchQuery == null || searchQuery == "") {
        router.push("/");
        return
    }

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ListResults searchQuery={searchQuery}></ListResults>
    </div>
    )
}
