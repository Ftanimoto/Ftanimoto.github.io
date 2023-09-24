import { Outlet } from 'react-router-dom';
import Header from '../Header/index.tsx';
import Home from '../Home';
import { Container } from './style.ts';
import GlobalStyles from '../../styles/global-styles.ts';

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
