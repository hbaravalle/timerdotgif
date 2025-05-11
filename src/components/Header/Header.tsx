import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
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
          <button className={styles.header__button}>
            <Image src='/images/fullscreen.svg' width={25} height={25} alt='' />
          </button>
        </li>
      </ul>
    </header>
  );
}
