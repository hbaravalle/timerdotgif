'use client';

import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  const goFullscreen = () => {
    const element = document.documentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        (element as any).webkitRequestFullscreen();
      } else if ((element as any).msRequestFullscreen) {
        (element as any).msRequestFullscreen();
      }
    }
  };

  return (
    <header className={styles.header}>
      <a className={styles.header__logo} href='#'>
        <Image
          src='/images/logo.svg'
          width={58}
          height={50}
          alt='Logo Timer Dot Gif'
          unoptimized
        />
      </a>
      <ul className={styles.header__buttons}>
        <li>
          <button className={styles.header__button}>
            <Image src='/images/moon.svg' width={25} height={25} alt='' />
          </button>
        </li>
        <li>
          <button className={styles.header__button} onClick={goFullscreen}>
            <Image src='/images/fullscreen.svg' width={25} height={25} alt='' />
          </button>
        </li>
      </ul>
    </header>
  );
}
