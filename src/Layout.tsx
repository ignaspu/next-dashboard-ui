import React from 'react';
import Header from '@/components/Header/Header';
import 'normalize.css';
import Main from '@/components/Main/Main';
import Head from 'next/head';
import { Footer } from './components/Footer/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={poppins.className}>
      <Head>
        <title>User Dashboard</title>
        <meta name="description" content="User dashboard built with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
