import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/ui/header';

export const Layout = () => {
  return (
    <div className="layout">
      <Header isMain={true} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
