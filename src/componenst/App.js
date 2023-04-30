import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { GlobalStyle } from './GlobalStyle';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/HomePage'));
const Tweets = lazy(() => import('../pages/TweetsPage'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
