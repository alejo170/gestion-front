import React from 'react';
import NavbarAdmin from '../componentes/NavbarAdmin';
import { Outlet } from 'react-router';
import FooterAdmin from '../componentes/FooterAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LayoutAdmin = () => {
  return (

    <div>
      <NavbarAdmin />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
      <br />
      <footer class="pie">
        <FooterAdmin />
      </footer>
      <ToastContainer />
    </div>
);
};

export default LayoutAdmin;