import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PATHS } from '@/router';
import { Button, Container, Input } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { tryCatch } from '@/utils';
import { useUser } from '@/hooks/useUser';
import { useState } from 'react';

// Define the signup schema
const SignupSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3, { message: 'Username must be 3 or more characters long' })
    .max(50, { message: 'Username must be 50 or fewer characters long' }),
  password: z
    .string()
    .min(8, { message: 'Password must be 8 or more characters long' })
    .max(256, { message: 'Password must be 256 or fewer characters long' }),
});

type SignupSchemaType = z.infer<typeof SignupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(SignupSchema),
  });
  const { register: registerUser } = useUser();
  const navigate = useNavigate();

  const [signUpError, setSignUpError] = useState('');

  const submitForm: SubmitHandler<SignupSchemaType> = async ({
    email,
    username,
  }) => {
    const { error } = await tryCatch(registerUser({ email, name: username }));

    if (!error) {
      navigate(PATHS.HOME);

      return;
    }

    setSignUpError('Failed to sign up');
  };

  return (
    <main className="flex flex-col gap-2 justify-center items-center">
      <Container className="flex flex-col gap-4">
        <h1 className="text-center">Sign up</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            placeholder="Email"
            {...register('email')}
            hasError={!!errors.email?.message}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            placeholder="Username"
            {...register('username')}
            hasError={!!errors.username?.message}
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
          <Input
            placeholder="Password"
            type="password"
            {...register('password')}
            hasError={!!errors.password?.message}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {signUpError && <p className="text-red-500">{signUpError}</p>}
          <Button className="ml-auto" type="submit">
            Sign up
          </Button>
        </form>
      </Container>
      <p className="flex gap-1">
        Already have an account?
        <Link to={PATHS.LOGIN} className="underline">
          Log in
        </Link>
      </p>
    </main>
  );
}
