import React from 'react'
import logo from '../imagenes/logo.png';
import PrivateComponent from './PrivateComponent';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const NavbarAdmin = () => {

   

    return (
<div>
<nav class="navbar navbar-expand-lg fondomenu text-uppercase fixed-top" id="mainNav">
<div class="container">
    
    <img src={logo} alt='imagen' height="70" />
    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">

        <li><NavLink to='/admin/perfil' className='nav-link py-3 px-0 px-lg-3 rounded'> 
                <div>
                    <i className='fas fa-user' />
                    <span>Perfil</span>
                </div></NavLink></li>

        <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
        <li><NavLink to='/admin/usuarios' className='nav-link py-3 px-0 px-lg-3 rounded'> 
                <div>
                    <i className='fas fa-users' />
                    <span>Usuarios</span>
                </div></NavLink></li>
        </PrivateComponent>
            <li><NavLink to='/admin/proyectos' className='nav-link py-3 px-0 px-lg-3 rounded'> 
                <div>
                    <i className='fas fa-project-diagram' />
                    <span>Proyectos</span>
                </div></NavLink></li>
            <li><NavLink to='/admin/inscripciones' className='nav-link py-3 px-0 px-lg-3 rounded'> 
                <div>
                    <i className='fas fa-calendar-check' />
                    <span>Inscripciones</span>
                </div></NavLink></li>
            
            <Logout />
        </ul>
    </div>
</div>
</nav>
</div>
    );
};
        
const Logout = () => {
const { setToken } = useAuth();
const deleteToken = () => {
console.log('eliminar token');
setToken(null);
};
    
        return (

            <li onClick={() => deleteToken()}>
                <NavLink to='/login' className='nav-link py-3 px-0 px-lg-3 rounded'>
                 <div>
                 <i className='fas fa-sign-out-alt' />
                <span>Salir</span>
                </div>
                </NavLink>
            </li>
            );
        };

export default NavbarAdmin
