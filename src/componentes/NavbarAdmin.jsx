import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';

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
            <Link to="/admin/usuarios"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Usuarios</a></li></Link>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Proyectos</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Inscripciones</a></li>
            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Avances</a></li>
            <Link to="/Login"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#">Logout</a></li></Link>
        </ul>
    </div>
</div>
</nav>


        </div>
    )
}

export default NavbarAdmin
