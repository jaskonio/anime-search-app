"use client";

import ListResults from "@/app/components/ui/listCards";
import { Suspense } from "react";

function SearchBarFallback() {
    return <>placeholder</>
}

export default function Page() {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Suspense fallback={<SearchBarFallback />}>
            <ListResults></ListResults>
        </Suspense>
    </div>
    )
}
