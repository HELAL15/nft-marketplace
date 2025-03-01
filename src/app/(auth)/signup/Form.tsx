'use client';

import Button from '@/components/common/Button';
import FormInput from '@/components/ui/FormInput';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/schemas/userSchema';
import clsx from 'clsx';
import { postData } from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  });

  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => postData('/auth/signup', data),
    onSuccess: ({ message, token }) => {
      console.log(token);
      Cookies.set('token', token, {
        path: '/',
        sameSite: 'strict'
      });
      toast.success(message);
      router.push('/');
    },
    onError: (err: any) => {
      const msg = err?.response.data.error;
      toast.error(msg);
    }
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(`space-y-5 mt-8 
        md:max-w-[270px] 
        lg:max-w-[400px] 
        xl:max-w-[500px] 
        `)}
      >
        <FormInput
          name="firstName"
          control={control}
          placeholder="First Name"
          errors={errors}
        />
        <FormInput
          name="lastName"
          control={control}
          placeholder="Last Name"
          errors={errors}
        />
        <FormInput
          name="email"
          control={control}
          type="email"
          placeholder="Email"
          errors={errors}
        />
        <FormInput
          name="phone"
          control={control}
          type="tel"
          placeholder="phone number"
          errors={errors}
        />
        <FormInput
          name="password"
          control={control}
          type="password"
          placeholder="Password"
          errors={errors}
        />
        <FormInput
          name="confirmPassword"
          control={control}
          type="password"
          placeholder="Confirm Password"
          errors={errors}
        />

        <Button cx="w-full !mt-8" disabled={isPending}>
          <span>Sign Up</span>
        </Button>

        <p className="text-center">
          <span>Already have an account? </span>
          <Link className="text-primary underline" href="/login">
            Log in to your account
          </Link>
        </p>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
