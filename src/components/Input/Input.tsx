'use client';

import styles from './Input.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const Input = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      className={styles.input}
      type="tel"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
