export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
