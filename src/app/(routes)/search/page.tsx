import SearchAnime from "@/app/components/ui/searchAnime";

export default function Page() {

    return (
        <>
            <section className="w-full py-12 md:py-14 lg:py-12 bg-white dark:bg-gray-900 flex flex-col items-center">
                <div className="w-full max-w-sm space-y-2">
                    <SearchAnime searhValue=""></SearchAnime>
                </div>

            </section>

            <div className="p-5">
                <p className="w-full text-center text-2xl">Busca algo</p>
            </div>
        </>


    )
}
