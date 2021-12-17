import React, { useState, useEffect} from 'react';
import Index from './paginas/index';
import LayoutAdmin from './layouts/layoutAdmin';
import IndexAdmin from './paginas/admin/index';
import Login from './paginas/autenticacion/login';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUsuarios from './paginas/usuarios/index';
import EditarUsuario from './paginas/usuarios/editar';
import Perfil from './paginas/usuarios/perfil';
import './estilos/tabla.css';
import Registro from './paginas/autenticacion/registrar';
import { AuthContext } from './context/authContext';
import { setContext } from '@apollo/client/link/context';
import { UserContext } from './context/userContext';
import jwt_decode from 'jwt-decode';
import IndexProyectos from './paginas/proyectos/index';
import NuevoProyecto from './paginas/proyectos/NuevoProyecto';
import IndexAvances from './paginas/avances/index';
import IndexInscripciones from './paginas/inscripciones/index';

const httpLink = createHttpLink({
  uri: 'https://gestion-d-proyectos-back.herokuapp.com/graphql',
//  uri: 'http://localhost:4000/graphql',
});

//const client = new ApolloClient({

//    uri: 'https://gestion-d-proyectos-back.herokuapp.com/graphql',
//    cache: new InMemoryCache(),
//});

//Cada vez que GraphQL haga un request al backend, coloque el token, lo busque en el localstorage y lo coloque en el header 
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {

  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');
//guardamos el token en el localstorage en formato String
  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}> {/* le pasamos el token al contexto para que este disponible en toda la app */}
        <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
                
            <Route path='/admin' element={<LayoutAdmin />}>
     |      <Route path='' element={<IndexAdmin />} />
            <Route path='/admin/usuarios' element={<IndexUsuarios />} />
            <Route path='/admin/usuarios/editar/:_id' element={<EditarUsuario />} /> 
            <Route path='/admin/perfil' element={<Perfil />} />
            <Route path='/admin/proyectos' element={<IndexProyectos />} />
            <Route path='/admin/proyectos/nuevo' element={<NuevoProyecto />} />
            <Route path='/admin/avances' element={<IndexAvances />} />
            <Route path='/admin/inscripciones' element={<IndexInscripciones />} />
            </Route>
            
            
            
          </Routes>
      </BrowserRouter>
      </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
