import Index from './paginas/index';
import LayoutAdmin from './layouts/layoutAdmin';
import IndexAdmin from './paginas/admin/index';
import Login from './paginas/login';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />

            <Route path='/login' element={<Login />} />
              
           
            <Route path='/admin' element={<LayoutAdmin />}>
              <Route path='' element={<IndexAdmin />} />
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
