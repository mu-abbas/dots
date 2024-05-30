'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isUrlEmpty, setIsUrlEmpty] = useState(true);

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  const urlPattern = /^https?:\/\/([\w.-]+(?:(?:[:\d]*\/)[\w.-]+)*\/?|[\w.-]+)?\.([a-z]{2,6})([:/?\w-&=%.+#]*)$/gi;

  async function onSubmit(formData) {
    setIsSubmitting(true);

    // const res = await fetch('https://qzzlzsrwjrwxtamulxpz.supabase.co/functions/v1/resend-contact-form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();

    // if (data?.id) {
    toast.success('We have received your request successfully');
    reset();
    // } else {
    //   toast.error('Something went wrong, please try again!');
    // }
    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center max-w-sm gap-4 p-4 mx-auto md:p-6 sm:p-5 lg:gap-0 lg:flex-row bg-beige rounded-xl md:max-w-md lg:max-w-5xl lg:flex-wrap lg:p-8 lg:translate-y-full lg:shadow-lg lg:-mt-36 3xl:max-w-6xl"
    >
      <div className="flex flex-col w-full gap-4 rounded-lg labelsGroup lg:flex-row lg:gap-0 lg:border-grey lg:border-2 lg:border-opacity-5 lg:focus-within:border-darkGreen active:border-darkGreen">
        <label className="relative w-full group lg:min-w-[50%] lg:w-auto labelGroup">
          <span
            className={`absolute bg-white border-2 border-grey border-opacity-10 inline-block h-[1.2rem] w-[4.5rem] z-10 rounded-md translate-x-3 -translate-y-[0.525rem] opacity-0 group-focus-within:opacity-100 lg:w-[6rem] lg:h-[1.5rem] lg:-translate-y-[0.92rem] lg:translate-x-7 ${
              isEmailEmpty ? '' : 'opacity-100'
            }`}
          ></span>
          <p
            className={`absolute flex items-center justify-center px-4 py-1 text-black duration-300 z-20 transtition lg:text-lg cursor-text ${
              isEmailEmpty
                ? 'group-focus-within:leading-none group-focus-within:-translate-y-3 group-focus-within:-translate-x-2 group-focus-within:opacity-100 group-focus-within:scale-[0.6] lg:group-focus-within:scale-75 lg:group-focus-within:-translate-y-4 lg:group-focus-within:translate-x-4 translate-x-2 translate-y-1.5 opacity-40 lg:translate-y-2.5 2xl:translate-y-3'
                : '-translate-y-3 leading-none -translate-x-2 opacity-100 scale-[0.6] lg:scale-75 lg:-translate-y-4 lg:translate-x-4'
            }`}
          >
            Your Email
          </p>
          <input
            type="text"
            placeholder="Your Email"
            {...register('email', {
              required: 'This field is required.',
              pattern: {
                value: emailPattern,
                message: 'Please insert a correct email address.',
              },
            })}
            className="w-full px-6 py-2 border-2 rounded-lg border-opacity-10 text-grey lg:rounded-none lg:rounded-l-lg placeholder:opacity-0 focus:outline-none focus:border-opacity-100 focus:border-darkGreen lg:py-4 lg:border-none border-grey"
            onChange={e => setIsEmailEmpty(!e.target.value.length > 0)}
          />
          {errors?.email && (
            <p className="absolute bottom-0 right-0 px-3 py-1 text-[0.5rem] lg:text-xs error-message 3xl:text-sm text-red font-poppins">
              {errors?.email?.message}
            </p>
          )}
        </label>

        <label className="relative w-full group lg:min-w-[50%] lg:w-auto lg:border-l lg:border-grey lg:border-opacity-5 labelGroup">
          <span
            className={`absolute bg-white border-2 border-grey border-opacity-10 inline-block h-[1.2rem] w-[8rem] z-10 rounded-md translate-x-3 -translate-y-[0.525rem] opacity-0 group-focus-within:opacity-100 lg:w-[11rem] lg:h-[1.5rem] lg:-translate-y-[0.92rem] lg:translate-x-7 ${
              isUrlEmpty ? '' : 'opacity-100'
            }`}
          ></span>
          <p
            className={`absolute flex items-center justify-center z-20 px-4 py-1 text-black duration-300 rounded-md transtition lg:text-lg cursor-text ${
              isUrlEmpty
                ? 'group-focus-within:leading-none group-focus-within:-translate-y-3 group-focus-within:-translate-x-[1.625rem] group-focus-within:opacity-100 group-focus-within:scale-[0.6] lg:group-focus-within:scale-75 lg:group-focus-within:-translate-y-4 lg:group-focus-within:translate-x-1 translate-x-2 translate-y-1.5 opacity-40 lg:translate-y-2.5 2xl:translate-y-3'
                : '-translate-y-3 leading-none -translate-x-[1.625rem] opacity-100 scale-[0.6] lg:scale-75 lg:-translate-y-4 lg:translate-x-1'
            }`}
          >
            Link Your Presentation
          </p>
          <input
            type="text"
            placeholder="Link your presentation"
            {...register('url', {
              required: 'This field is required.',
              pattern: { value: urlPattern, message: 'Please insert a valid url.' },
            })}
            className="w-full px-6 py-2 transition duration-300 border-2 rounded-lg border-opacity-10 border-grey lg:rounded-none lg:rounded-r-lg placeholder:opacity-0 focus:border-opacity-100 focus:border-darkGreen focus:outline-none lg:py-4 lg:border-none text-grey"
            onChange={e => setIsUrlEmpty(!e.target.value.length > 0)}
          />
          {errors?.url && (
            <p className="absolute bottom-0 right-0 px-3 py-1 text-[0.5rem] error-message lg:text-xs text-red font-poppins 3xl:text-sm">
              {errors?.url?.message}
            </p>
          )}
        </label>
      </div>

      <input
        type="submit"
        value={isSubmitting ? 'Please wait...' : 'Send'}
        className="border-2 border-blue w-full px-6 py-2 mr-auto transition duration-300 rounded-lg cursor-pointer bg-blue lg:mt-6 lg:max-w-60 lg:py-4 lg:text-xl hover:opacity-85 active:scale-[0.98] hover:shadow-lg active:shadow-sm uppercase tracking-widest lg:border-none"
      />
    </form>
  );
}

export default Form;
