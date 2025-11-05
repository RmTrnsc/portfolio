import Navigation from "app/components/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex flex-col justify-center">
      <Navigation />
      {children}
    </main>
  );
}