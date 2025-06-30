'use client';

import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
