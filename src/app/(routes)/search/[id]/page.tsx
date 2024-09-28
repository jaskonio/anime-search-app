import ListResults from "@/app/components/ui/listCards";


export default function Page({ params }: { params: { id: string } }) {
    const searchQuery = params.id

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ListResults searchQuery={searchQuery}></ListResults>
        </div>
    )
}
