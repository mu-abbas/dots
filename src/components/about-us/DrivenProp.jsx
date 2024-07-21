function DrivenProp({ src, title, description }) {
  return (
    <figure className="flex flex-col gap-4 3xl:gap-8">
      <img
        src={src}
        alt={title}
        className="p-8 border-[0.5px] 3xl:rounded-2xl border-lightGrey rounded-xl size-36 lg:size-44 3xl:size-60"
      />
      <figcaption className="space-y-2">
        <h3 className="text-2xl 3xl:text-4xl">{title}</h3>
        <p className="text-sm font-light 3xl:text-lg lg:max-w-sm xl:max-w-60 font-poppins 3xl:max-w-72">
          {description}
        </p>
      </figcaption>
    </figure>
  );
}

export default DrivenProp;
