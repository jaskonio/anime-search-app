import SearchAnime from "../../../components/ui/searchAnime";


export default function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode,
  params: {
    id: string
  }
}>) {
  return (
      <main className="flex-1">
        <section className="w-full py-12 md:py-14 lg:py-12 bg-white dark:bg-gray-900 flex flex-col items-center">
          <div className="w-full max-w-sm space-y-2">
              <SearchAnime searhValue={params.id}></SearchAnime>
          </div>
        </section>

        <section className="w-full py-12 md:py-14 lg:py-12 dark:bg-gray-900">
          <div className="px-4 md:px-6 text-center">
              {children}
          </div>
        </section>
      </main>
  );
}
