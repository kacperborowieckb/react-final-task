import { z } from 'zod';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PATHS } from '@/router';
import { Button, Container, Input } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { tryCatch } from '@/utils';
import { useUser } from '@/hooks/useUser';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be 8 or more characters long' })
    .max(256, { message: 'Password must be 256 or fewer characters long' }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  const { login } = useUser();

  const submitForm: SubmitHandler<LoginSchemaType> = async ({ email }) => {
    const { data, error } = await tryCatch(login(email));

    console.info(data, error);
  };

  return (
    <main className="flex flex-col gap-2 justify-center items-center">
      <Container className="flex flex-col gap-4">
        <h1 className="text-center">Login</h1>
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
            placeholder="Password"
            {...register('password')}
            hasError={!!errors.password?.message}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <Button className="ml-auto" type="submit">
            Login
          </Button>
        </form>
      </Container>
      <p className="flex gap-1">
        Doesn&apos;t have an account?
        <Link to={PATHS.SIGNUP} className="underline">
          Sign up
        </Link>
      </p>
    </main>
  );
}
