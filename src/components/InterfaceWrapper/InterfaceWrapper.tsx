import { ReactNode } from 'react';
import styles from './InterfaceWrapper.module.scss';

interface InterfaceWrapperProps {
  children: ReactNode;
}

export default function InterfaceWrapper({ children }: InterfaceWrapperProps) {
  return <div className={styles['interface-wrapper']}>{children}</div>;
}
