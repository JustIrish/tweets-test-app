import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Layout, Main } from './SharedLayout.styled';
import Header from 'componenst/Header';

const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Layout>
  );
};

export default SharedLayout;
