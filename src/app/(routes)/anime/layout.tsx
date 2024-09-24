import AnimeHeader from "../../components/ui/header";
import AnimeFooter from "../../components/ui/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <AnimeHeader></AnimeHeader>
      {children}
      <AnimeFooter></AnimeFooter>
    </div>
  );
}
