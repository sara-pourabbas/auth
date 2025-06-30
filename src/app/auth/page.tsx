'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import styles from '@/styles/form.module.scss';
import validatePhone from '@/utils/validatePhone';

const AuthPage = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!validatePhone(phone)) {
      setError('شماره تلفن معتبر نیست.');
      return;
    }

    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      const user = data.results[0];
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } catch (err) {
      console.error('خطا در دریافت کاربر:', err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>ورود</h2>
      <Input value={phone} onChange={setPhone} placeholder="شماره تلفن همراه" />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
};

export default AuthPage;
