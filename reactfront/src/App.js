import logo from './logo.svg';
import './App.css';

//importamos los componentes
import Navbar from './components/Navbar';



import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

import CompShowCelulars from './celular/ShowCelulars';
import CompCreateCelular from './celular/CreateCelular';
import CompEditCelular from './celular/EditCelular';

import CompShowUsers from './user/ShowUsers';
import CompCreateUser from './user/CreateUser';
import CompEditUser from './user/EditUser';



//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/blogs' element={ <CompShowBlogs />} />
            <Route path='/blogs/create' element={ <CompCreateBlog />} />
            <Route path='/blogs/edit/:id' element={ <CompEditBlog />} />


            <Route path='/celulars' element={ <CompShowCelulars />} />
            <Route path='/celulars/create' element={ <CompCreateCelular />} />
            <Route path='/celulars/edit/:id' element={ <CompEditCelular />} />

            <Route path='/users' element={ <CompShowUsers />} />
            <Route path='/users/create' element={ <CompCreateUser />} />
            <Route path='/users/edit/:id' element={ <CompEditUser />} />
            
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
