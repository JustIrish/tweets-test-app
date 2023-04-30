import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Layout, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Layout>
      <header>Header</header>
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <footer>Footer</footer>
    </Layout>
  );
};

export default SharedLayout;
