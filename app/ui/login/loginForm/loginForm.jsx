'use client';

import { authenticate } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

import styles from './loginForm.module.css';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      Login
    </button>
  );
}

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.container}>
      <div>
        <h3>username - admin</h3>
        <h3>password - 123</h3>
      </div>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <SubmitButton />
        {state && state}
      </form>
    </div>
  );
};

export default LoginForm;
