import logo from '@/shared/assets/images/logo.svg';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Header = ({ isMain = false }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="SkyproWallet" />
      {isMain ? (
        <>
          <nav className={styles.menu}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link}>Мои расходы</Link>
              </li>
              <li className={styles.menu__item}>
                <Link className={styles.menu__link}>Анализ Расходов</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.exit}>
            <p className={styles.exit__text}>Выход</p>
          </div>
        </>
      ) : null}
    </header>
  );
};
