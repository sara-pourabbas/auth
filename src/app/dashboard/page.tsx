'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.scss';

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/auth');
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🎉 خوش آمدید به داشبورد</h1>
      <p className={styles.subtext}>از اینکه اینجا هستید خوشحالیم 😊</p>
    </div>
  );
};

export default DashboardPage;
