import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'sort';
  className?: string;
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button className={clsx(styles[variant], className)} {...props}>
      {children}
    </button>
  );
};
