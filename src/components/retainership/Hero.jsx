function Hero() {
  return (
    <section className="sticky flex items-center pt-32 text-offWhite bg-blue">
      <div className="container px-8 pt-12 mx-auto sm:px-10 sm:pt-14 md:px-12 md:pt-16 lg:px-14 lg:pt-20 xl:px-16 xl:pt-24 2xl:pt-28 2xl:px-20">
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="flex flex-col items-center">
            <span className="text-4xl font-light sm:text-5xl md:text-5xlplus lg:text-6xl xl:text-7xl">Dots</span>
            <span className="text-5xl font-medium sm:text-6xl md:text-7xl font-clash lg:text-8xl 2xl:text-9xl">
              Retainership
            </span>
          </h1>
          <img
            src="/image/retainership/Dots_RetinerImage.png"
            alt="stats and acitvity with collection of projects"
            className="animate-popUp"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
