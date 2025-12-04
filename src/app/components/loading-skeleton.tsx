"use client";

export function LoadingProjectsSkeleton({ projectsLength = 3 }: { projectsLength?: number }) {
  const skeletons = Array.from({ length: projectsLength }, (_, i) => i);

  return (
    <div className="loading-container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {skeletons.map((index) => (
        <div key={index} className="grid gap-2">
          <div className="skeleton rounded-2xl h-9 w-28"></div>
          <div className="relative grid px-4 gap-4">
            <div className="skeleton rounded-2xl h-20 absolute w-3/4 left-4"></div>
            <div className="skeleton rounded-2xl h-56 mt-7 w-full max-w-4/5 mx-auto"></div>
            <div className="skeleton rounded-2xl h-12 w-36 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LoadingProjectSkeleton() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl skeleton h-8 w-28 md:mx-auto"></div>
      <div className="grid gap-6 md:grid-cols-[55%_1fr] md:items-center">
        <div className="skeleton rounded-2xl h-96 md:w-[55%] md:mx-auto"></div>
        <div className="grid gap-6 md:relative md:grid-rows-4 md:items-center">
          <div className="skeleton rounded-2xl h-8 w-full"></div>
          <div className="skeleton rounded-2xl h-8 w-full"></div>
          <div className="skeleton rounded-2xl h-8 w-full"></div>
          <div className="skeleton rounded-2xl h-12 w-36 flex mx-auto md:absolute md:bottom-0 md:left-0 md:right-0"></div>
        </div>
      </div>
    </div>
  );
}
