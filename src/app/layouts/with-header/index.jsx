import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/ui/header';

import styles from './styles.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header isMain={true} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
