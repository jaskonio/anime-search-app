import AnimeHeader from "../components/ui/header";
import AnimeFooter from "../components/ui/footer";
import SearchAnime from "../components/ui/searchAnime";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <AnimeHeader></AnimeHeader>

      <main className="flex-1">
        <section className="w-full py-12 md:py-14 lg:py-12 bg-white dark:bg-gray-900 flex flex-col items-center">
          <div className="w-full max-w-sm space-y-2">
            <SearchAnime></SearchAnime>
          </div>
          
        </section>
        <section className="w-full py-12 md:py-14 lg:py-12 bg-white dark:bg-gray-900">
          <div className="px-4 md:px-6">
            {children}
          </div>
          
        </section>
      </main>
    
      <AnimeFooter></AnimeFooter>
    </div>
  );
}
