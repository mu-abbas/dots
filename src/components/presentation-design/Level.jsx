function Level({ heading, description, note, bg }) {
  return (
    <li
      className={`max-w-sm p-6 mx-auto md:max-w-md 3xl:max-w-max rounded-xl 2xl:p-8 3xl:p-12 ${
        bg === 'shape4'
          ? 'bg-shape4 bg-[left_-4rem_bottom_-4rem]'
          : bg === 'shape2'
          ? 'bg-shape2 bg-[left_-6rem_bottom_-2rem]'
          : 'bg-shape3 bg-[right_bottom_-2rem]'
      } bg-contain  bg-lightPurple bg-opacity-15 bg-no-repeat`}
    >
      <h3 className="text-2xl text-green lg:text-xl xl:text-3xl 3xl:text-4xl">{heading}</h3>
      <div className="p-6 space-y-4 lg:px-0 xl:px-6 2xl:p-8">
        <p className="lg:text-sm xl:text-base 3xl:text-xl">{description}</p>
        <p className="text-sm lg:text-xs xl:text-sm 3xl:text-lg">*{note}</p>
      </div>
    </li>
  );
}

export default Level;
