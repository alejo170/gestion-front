import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../componentes/NavbarAdmin';
import { Outlet } from 'react-router';
import FooterAdmin from '../componentes/FooterAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from '@apollo/client';
import { useAuth } from '../context/authContext';
import { REFRESH_TOKEN } from '../graphql/autenticacion/mutations';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
//import PrivateRoute from '../componentes/PrivateRoute';


const LayoutAdmin = () => {

  const navigate = useNavigate();
  //const { authToken, setToken } = useAuth();
  const { setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);

//  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
  const [refreshToken, { data: dataMutation, loading: loadingMutation }] =
    useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.refreshToken.token) {
        setToken(dataMutation.refreshToken.token);
      } else {
        setToken(null);
        navigate('/login');
      }
      setLoadingAuth(false);
    }
  }, [dataMutation, setToken, loadingAuth, navigate]);

  if (loadingMutation || loadingAuth) return <div>Loading...</div>;

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