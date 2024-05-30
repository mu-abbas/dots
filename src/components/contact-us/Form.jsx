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
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isUrlEmpty, setIsUrlEmpty] = useState(true);
  const [isNameEmpty, setIsNameEmpty] = useState(true);
  const [isBudgetEmpty, setIsBudgetEmpty] = useState(true);
  const [isTimelineEmpty, setIsTimelineEmpty] = useState(true);

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  const urlPattern = /^https?:\/\/([\w.-]+(?:(?:[:\d]*\/)[\w.-]+)*\/?|[\w.-]+)?\.([a-z]{2,6})([:/?\w-&=%.+#]*)$/gi;
  const numbersPattern = /^\d+$/;

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
    <div className="flex flex-col max-w-md gap-2 mx-auto lg:max-w-lg xl:min-w-max xl:w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 px-6 pt-4 pb-8 font-poppins bg-green rounded-xl xl:w-full"
      >
        <label className="relative group">
          <p
            className={`absolute transition duration-300 ${
              isNameEmpty
                ? 'group-focus-within:scale-75 group-focus-within:-translate-y-2 group-focus-within:translate-x-1 translate-x-4 translate-y-3'
                : 'scale-75 -translate-y-2 translate-x-1'
            }`}
          >
            Name
          </p>
          <input
            autoComplete="off"
            type="text"
            placeholder="Name"
            {...register('name', { required: 'This field is required' })}
            className="contact-input"
            onChange={e => setIsNameEmpty(!e.target.value.length > 0)}
          />
          {errors?.name && (
            <p className="absolute bottom-0 right-0 p-1 text-xs error-message text-red font-poppins">
              {errors?.name?.message}
            </p>
          )}
        </label>

        <label className="relative group">
          <p
            className={`absolute transition duration-300 ${
              isEmailEmpty
                ? 'group-focus-within:scale-75 group-focus-within:-translate-y-2 group-focus-within:translate-x-1 translate-x-4 translate-y-3'
                : 'scale-75 -translate-y-2 translate-x-1'
            }`}
          >
            Email
          </p>
          <input
            autoComplete="off"
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: emailPattern,
                message: 'Please insert a valid email address.',
              },
            })}
            className="contact-input"
            onChange={e => setIsEmailEmpty(!e.target.value.length > 0)}
          />
          {errors?.email && (
            <p className="absolute bottom-0 right-0 p-1 text-xs error-message text-red font-poppins">
              {errors?.email?.message}
            </p>
          )}
        </label>

        <label className="relative group">
          <p
            className={`absolute transition duration-300 ${
              isBudgetEmpty
                ? 'group-focus-within:scale-75 group-focus-within:-translate-y-2 group-focus-within:translate-x-1 translate-x-4 translate-y-3'
                : 'scale-75 -translate-y-2 translate-x-1'
            }`}
          >
            Budget
          </p>
          <input
            autoComplete="off"
            type="text"
            placeholder="Budget"
            {...register('budget', {
              required: false,
              pattern: {
                value: numbersPattern,
                message: 'Please insert a correct value.',
              },
            })}
            className="contact-input"
            onChange={e => setIsBudgetEmpty(!e.target.value.length > 0)}
          />
          {errors?.budget && (
            <p className="absolute bottom-0 right-0 p-1 text-xs error-message text-red font-poppins">
              {errors?.budget?.message}
            </p>
          )}
        </label>

        <label className="relative group">
          <p
            className={`absolute transition duration-300 ${
              isTimelineEmpty
                ? 'group-focus-within:scale-75 group-focus-within:-translate-y-2 group-focus-within:translate-x-1 translate-x-4 translate-y-3'
                : 'scale-75 -translate-y-2 translate-x-1'
            }`}
          >
            Timeline
          </p>
          <input
            autoComplete="off"
            type="text"
            placeholder="Timeline"
            {...register('timeline', { required: false })}
            className="contact-input"
            onChange={e => setIsTimelineEmpty(!e.target.value.length > 0)}
          />
        </label>

        <label className="relative group">
          <p
            className={`absolute transition duration-300 ${
              isUrlEmpty
                ? 'group-focus-within:scale-75 group-focus-within:-translate-y-2 group-focus-within:-translate-x-2 translate-x-4 translate-y-3'
                : 'scale-75 -translate-y-2 -translate-x-2'
            }`}
          >
            Link your presentation
          </p>
          <input
            autoComplete="off"
            type="text"
            placeholder="Link your presentation"
            {...register('url', {
              required: false,
              pattern: {
                value: urlPattern,
                message: 'Please insert a valid url.',
              },
            })}
            className="contact-input"
            onChange={e => setIsUrlEmpty(!e.target.value.length > 0)}
          />
          {errors?.url && (
            <p className="absolute bottom-0 right-0 p-1 text-xs error-message text-red font-poppins">
              {errors?.url?.message}
            </p>
          )}
        </label>
        <input
          type="submit"
          value={isSubmitting ? 'Please wait...' : 'Submit'}
          className="px-4 py-2 text-lg transition duration-300 bg-black border-2 border-black border-opacity-0 rounded-md shadow-md cursor-pointer hover:border-opacity-100 text-offWhite hover:bg-green hover:text-black active:shadow-sm active:scale-[0.98] mt-6"
        />
      </form>
      <p className="px-4">**Response time 6-8 hours.</p>
    </div>
  );
}

export default Form;
