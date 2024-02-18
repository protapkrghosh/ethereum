import NavBar from '../shared/NavBar/NavBar';
import Footer from '../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
