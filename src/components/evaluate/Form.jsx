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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-4 px-12 py-8 bg-beige rounded-xl">
      <label className="w-full">
        <input
          type="text"
          placeholder="Your Email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full px-6 py-2 text-black rounded-lg"
        />
      </label>
      <input
        type="url"
        placeholder="Link your presentation"
        {...register('Link your presentation', { required: false })}
        className="w-full px-6 py-2 text-black rounded-lg "
      />
      <input type="submit" value={isSubmitting ? 'Please wait...' : 'Send'} className="px-6 py-2 rounded-lg bg-blue" />
    </form>
  );
}

export default Form;
