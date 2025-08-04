import React from 'react';
import SideBar from '@/components/SideBar/SideBar';
import s from './Main.module.scss';
import { useMediaQuery } from 'react-responsive';

const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 1151 });

  if (!hasMounted) return null;

  return (
    <main className={s.container}>
      <div className={s.main}>
        {!isMobile && <SideBar />}
        {children}
      </div>
    </main>
  );
};

export default Main;
