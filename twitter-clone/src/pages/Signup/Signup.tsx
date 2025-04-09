import { Link } from 'react-router-dom';

import { Button, Container, Input } from '@/components';
import { PATHS } from '@/router';

export default function Signup() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center">
      <Container className="flex flex-col gap-4">
        <h1 className="text-center">Login</h1>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Username" />
        <Button className="ml-auto">Sign up</Button>
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
