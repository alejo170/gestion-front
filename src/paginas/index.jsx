import React from "react";
import '../estilos/inicio.css';
import logo from '../imagenes/logo.png';
import portafolio from '../imagenes/portafolio.png';
import { Link } from 'react-router-dom';


const Index = () => {
    return (
  
        
        <body id="page-top">
            {/* Area de Menu */}
            <nav class="navbar navbar-expand-lg fondomenu text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    
                    <img src={logo} alt='imagen' height="70" />
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portafolio</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Nosotros</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contactenos</a></li>
                            <Link to="/Login"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#login">Login</a></li></Link>
                            <Link to="/Registro"><li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#registrarse">Registrarse</a></li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Area de imagen principal */}
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    {/* */}
                   
                    <h1 class="masthead-heading text-uppercase mb-0">Devs Futuristics</h1>
                    {/* Area de imagen principal - Icono */}
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* Area de imagen principal - Contenido */}
                    <p class="masthead-subheading font-weight-light mb-0">Aplicaciones hechas a medida</p>
                    <p class="masthead-subheading font-weight-light mb-0">React - Html5 - CSS3 - Javascript</p>
                    <br />
                    <div>
                    <i class="fab fa-react fa-5x"></i>  <i class="fab fa-js-square fa-5x"></i>
                    </div>
                </div>
            </header>
            {/* Seccion Portafolio */}
            <section class="page-section portfolio" id="portfolio">
                <div class="container">
                    {/* Titulo Portafolio */}
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portafolio</h2>
                    {/* Iconos Portafolio */}
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* Items del Portafolio */}
                    <div class="row justify-content-center">
                        {/* Item 1 */}
                        <div class="col-md-6 col-lg-4 mb-5">
                            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src={portafolio} alt="portafolio" />
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
            {/* Area de nosotros */}
            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                   {/* Area de nosotros - Titulo */}
                    <h2 class="page-section-heading text-center text-uppercase text-white">Nosotros</h2>
                    {/* Area de nosotros - Iconos */}
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* Area de nosotros - Contenido */}
                    <div class="row">
                        <div class="col-lg-4 ms-auto"><p class="lead">Somos un equipo de desarrollo que planeamos, diseñamos y llevamos a cabo todo tipo de aplicaciones para los direrentes sectores.</p></div>
                        <div class="col-lg-4 me-auto"><p class="lead">Nuestras aplicaciones incluyen los mas altos estandares para estar siempre a la vanguardia. Trabajamos con React, Html5, Css3, Javascript, Phyton y Java</p></div>
                    </div>
                    {/* Area de nosotros - Boton */}
                    <div class="text-center mt-4">
                        <a class="btn btn-xl btn-outline-light" href="#contact">
                            <i class="fas fa-envelope me-2"></i>
                            Contactanos
                        </a>
                    </div>
                </div>
            </section>
            {/* Area de contactenos */}
            <section class="page-section" id="contact">
                <div class="container">
                    {/* Area de contactenos - Titulo */}
                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contactanos</h2>
                    {/* Area de contactenos - Iconos */}
                    <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* Area de contactenos - Formulario */}
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xl-7">
                            
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label for="name">Nombre Completo</label>
                                    <div class="invalid-feedback" data-sb-feedback="name:required">Un nombre es requerido.</div>
                                </div>
                                
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                    <label for="email">Direccion de Email</label>
                                    <div class="invalid-feedback" data-sb-feedback="email:required">Un email es requerido.</div>
                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                    <label for="phone">Numero Telefonico</label>
                                    <div class="invalid-feedback" data-sb-feedback="phone:required">Un numero telefonico es requerido.</div>
                                </div>
                               {/*style="height: 10rem"*/}
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."  data-sb-validations="required"></textarea>
                                    <label for="message">Mensaje</label>
                                    <div class="invalid-feedback" data-sb-feedback="message:required">Un mensaje es requerido.</div>
                                </div>
                               
                                <div class="d-none" id="submitSuccessMessage">
                                    <div class="text-center mb-3">
                                        <div class="fw-bolder">Formulario enviado con exito</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                               
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error al enviar el mensaje</div></div>
                                {/* Area de contactenos - Boton */}
                                <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Area de Pie de pagina */}
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Ubicacion</h4>
                            <p class="lead mb-0">
                                Estamos ubicados en Colombia
                                <br />
                                Trabajamos de forma remota
                            </p>
                        </div>
                       
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Enlaces de interes</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://trello.com/b/3nrLSuVk/devsfuturistics"><i class="fab fa-fw fa-trello"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/alejo170"><i class="fab fa-fw fa-github"></i></a>
                            
                        </div>
                        
                        <div class="col-lg-4">
                            <h4 class="text-uppercase mb-4">MINTIC</h4>
                            <p class="lead mb-0">
                                Somos estudiantes de la Universidad de Antioquia y del Ministerio de las Tics
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
           {/* Area de copyright */}
            <div class="copyright py-4 text-center text-white">
                <div class="container"><small>Copyright &copy; Devs Futuristics 2021</small></div>
            </div>
             {/* Area de portafolio en detalle */}
             {/* Area de portafolio en detalle item 1 */}
            <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                        <div class="modal-body text-center pb-5">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">Gestion de Ventas</h2>
                                      
                                        <div class="divider-custom">
                                            <div class="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                            <div class="divider-custom-line"></div>
                                        </div>
                                        
                                        <img class="img-fluid rounded mb-5" src={portafolio} alt="portafolio" />
                                       
                                        <p class="mb-4">El equipo de desarrollo: analizó, diseñó y construyó una aplicación para controlar las ventas físicas y virtuales de una empresa de manufactura y hacerles el correspondiente seguimiento a estas ventas.</p>
                                        <a href="https://devsfuturistics.herokuapp.com/" target="_blank" rel="noreferrer"><button class="btn btn-primary"  data-bs-dismiss="modal">
                                            <i class="fas fa-times fa-fw"></i>
                                            Ir al sitio
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    
           
        </body>
  
  );
  };
  
  export default Index;
  