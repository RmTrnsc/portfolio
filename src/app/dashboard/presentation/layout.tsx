export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-4 p-2">{children}</main>;
} 