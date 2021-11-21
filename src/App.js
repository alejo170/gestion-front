import Index from './paginas/index';
import LayoutAdmin from './layouts/layoutAdmin';
import IndexAdmin from './paginas/admin/index';
import Login from './paginas/login';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexUsuarios from './paginas/usuarios/index';
import EditarUsuario from './paginas/usuarios/editar';
import './estilos/tabla.css';

//const httpLink = createHttpLink({
//  uri: 'https://gestion-d-proyectos-back.herokuapp.com/graphql',
//});

const client = new ApolloClient({

    uri: 'https://gestion-d-proyectos-back.herokuapp.com/graphql',
    cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/login' element={<Login />} />
                
            <Route path='/admin' element={<LayoutAdmin />}>
     |      <Route path='' element={<IndexAdmin />} />
            <Route path='/admin/usuarios' element={<IndexUsuarios />} />
            <Route path='/admin/usuarios/editar/:_id' element={<EditarUsuario />} />  
            </Route>
          </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
