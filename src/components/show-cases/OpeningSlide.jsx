function OpeningSlide({ src }) {
  return (
    <section>
      <div className="container px-8 mx-auto sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20">
        <img src={src} alt="opening slide" className="mx-auto sm:max-w-lg rounded-xl lg:max-w-full" />
      </div>
    </section>
  );
}

export default OpeningSlide;
