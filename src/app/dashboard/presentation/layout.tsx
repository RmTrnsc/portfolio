export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-6 md:my-10">{children}</main>;
} 