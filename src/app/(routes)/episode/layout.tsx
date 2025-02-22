export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          {children}
      </div>
      );
    }
    