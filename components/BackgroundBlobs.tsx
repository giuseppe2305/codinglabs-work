function BackgroundBlobs() {
  return (
    <>
      <div
        className="-z-1 pointer-events-none fixed top-10 sm:top-0 left-0 sm:-left-20 md:-left-50 size-30 sm:size-70 md:size-100
           rounded-full bg-linear-to-r from-lime-500/75 to-blue-500/75 blur-2xl sm:blur-[100px] md:blur-[150px]"
      ></div>
      <div
        className="-z-1 pointer-events-none fixed bottom-0 aspect-2/3 xl:-right-32 w-30 sm:w-40 right-0 blur-3xl md:blur-[80px] xl:w-100
           rounded-full bg-linear-to-l from-rose-600/75 to-blue-500/75 xl:blur-[150px]"
      ></div>
    </>
  );
}

export { BackgroundBlobs };
