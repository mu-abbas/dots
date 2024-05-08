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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('name', { required: true })} />
      <input type="text" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      <input type="number" placeholder="Budget" {...register('budget', { required: true, maxLength: 12 })} />
      <input type="text" placeholder="Timeline" {...register('timeline', { required: true })} />
      <input
        type="url"
        placeholder="Link your presentation"
        {...register('Link your presentation', { required: false })}
      />
      <input type="submit" value={isSubmitting ? 'Please wait...' : 'Submit'} />
    </form>
  );
}

export default Form;
