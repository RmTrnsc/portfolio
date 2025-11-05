export function LoadingProjectsSkeleton() {
  return (
    <div className="grid gap-2">
      <div className="skeleton rounded-2xl h-9 w-28"></div>
      <div className="relative grid px-4 gap-4">
        <div className="skeleton rounded-2xl h-20 absolute w-3/4 left-4"></div>
        <div className="skeleton rounded-2xl h-56 mt-7 w-full max-w-4/5 mx-auto"></div>
        <div className="skeleton rounded-2xl h-12 w-36 mx-auto"></div>
      </div>
    </div>
  );
}

export function LoadingProjectSkeleton() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="skeleton rounded-2xl h-6 w-28"></div>
      <div className="skeleton rounded-2xl h-32 w-full"></div>
      <div className="skeleton rounded-2xl h-8 w-full"></div>
      <div className="skeleton rounded-2xl h-8 w-full"></div>
      <div className="skeleton rounded-2xl h-8 w-full"></div>
    </div>
  );
}
