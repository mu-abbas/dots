'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(formData) {
    setIsSubmitting(true);

    const res = await fetch('https://qzzlzsrwjrwxtamulxpz.supabase.co/functions/v1/resend-contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (data?.id) {
      toast.success('We have received your request successfully');
      reset();
    } else {
      toast.error('Something went wrong, please try again!');
    }
    setIsSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center max-w-sm gap-4 p-4 mx-auto lg:gap-0 lg:flex-row bg-beige rounded-xl md:max-w-md lg:max-w-5xl lg:flex-wrap lg:p-8 lg:translate-y-full lg:shadow-lg lg:-mt-36"
    >
      <label className="relative w-full group lg:min-w-[50%] lg:w-auto">
        <span className="absolute flex items-center justify-center px-4 py-1 text-black duration-300 translate-x-2 translate-y-1 bg-white rounded-md group-focus-within:border-2 group-focus-within:leading-none group-focus-within:-translate-y-4 opacity-40 group-focus-within:-translate-x-1 transtition group-focus-within:opacity-100 group-focus-within:scale-[0.6] border-darkGreen lg:text-lg lg:border-grey lg:border-opacity-5 lg:translate-y-3">
          Your Email
        </span>
        <input
          type="text"
          placeholder="Your Email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full px-6 py-2 text-black rounded-lg lg:rounded-none lg:rounded-l-lg placeholder:opacity-0 focus:outline-darkGreen lg:focus:outline-none lg:py-4"
        />
      </label>
      <label className="relative w-full group lg:min-w-[50%] lg:w-auto lg:border-l lg:border-grey lg:border-opacity-5">
        <span className="absolute flex items-center justify-center px-4 py-1 text-black duration-300 translate-x-2 translate-y-1 bg-white rounded-md group-focus-within:border-2 group-focus-within:leading-none group-focus-within:-translate-y-4 opacity-40 group-focus-within:-translate-x-5 transtition group-focus-within:opacity-100 group-focus-within:scale-[0.6] border-darkGreen lg:text-lg lg:border-grey lg:border-opacity-5 lg:translate-y-3">
          Link Your Presentation
        </span>
        <input
          type="url"
          placeholder="Link your presentation"
          {...register('Link your presentation', { required: false })}
          className="w-full px-6 py-2 text-black rounded-lg lg:rounded-none lg:rounded-r-lg placeholder:opacity-0 focus:outline-darkGreen lg:focus:outline-none lg:py-4"
        />
      </label>
      <input
        type="submit"
        value={isSubmitting ? 'Please wait...' : 'Send'}
        className="w-full px-6 py-2 mr-auto transition duration-300 rounded-lg cursor-pointer bg-blue lg:mt-6 lg:max-w-60 lg:py-4 lg:text-lg hover:opacity-85 active:scale-[0.98] hover:shadow-lg active:shadow-sm"
      />
    </form>
  );
}

export default Form;
