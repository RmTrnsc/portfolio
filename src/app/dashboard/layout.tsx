import Navigation from "app/components/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[1em_1fr] p-2">
      <Navigation />
      {children}
    </div>
  );
}