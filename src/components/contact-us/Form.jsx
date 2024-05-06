'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(formData) {
    setIsSubmitting(true);
    const res = await fetch('https://formsubmit.co/ajax/kastel098@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data?.success === 'true') {
      toast.success('We have received your request successfully');
      reset();
    } else {
      toast.error('Something went wrong, please try again!');
    }
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register('Name', { required: true })} />
      <input type="text" placeholder="Email" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
      <input type="number" placeholder="Budget" {...register('Budget', { required: true, maxLength: 12 })} />
      <input type="text" placeholder="Timeline" {...register('Timeline', { required: true })} />
      <input
        type="url"
        placeholder="Link your presentation"
        {...register('Link your presentation', { required: true })}
      />
      <input type="hidden" {...register('_template')} value="table"></input>
      <input type="hidden" {...register('_cc')} value={getValues('Email')}></input>
      <input type="submit" value={isSubmitting ? 'Please wait...' : 'Submit'} />
    </form>
  );
}

export default Form;
