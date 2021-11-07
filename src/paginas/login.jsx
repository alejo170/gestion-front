import React from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../estilos/login.css';
import { Link } from 'react-router-dom';


const Login = () => {

let navigate = useNavigate();


//estos son los states
const [usuario,setUsuario] = useState({
  email:'',
  password:''
});

//db
const [dbUsuarios] = useState([
     
      {email:'devs@gmail.com',pass:'123'}
  ]
)

//error
const [error,setError] = useState('')

//funciones
const usuChange = (e) =>{
  setUsuario({
      ...usuario,
      [e.target.name] : e.target.value
  })
}

const sendForm = () => {
  
  dbUsuarios.forEach(function(elem) {
      if(elem.email === usuario.email && elem.pass === usuario.password){
          navigate('/admin');
        
      }
  })

setError('Credenciales Incorrectas')

}


return (
    
    
<main class="form-signin">
<br />
<div className='imagenHome'>
        <Link to='/'>
            <i class="fas fa-home fa-3x"></i>
        </Link>
    </div>
  <form>
    
    <br />
    <br />
    <br />
    <h1 class="h3 mb-3 fw-normal">Iniciar sesion</h1>
    <br />
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name='email'
                        value={usuario.email}
                        onChange={usuChange}/>
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name='password'
                        value={usuario.password}
                        onChange={usuChange}/>
      <label for="floatingPassword">Password</label>
    </div>

    
    <button class="w-100 btn-lg btn-iniciar-sesion" onClick={sendForm} type="button">Iniciar Sesion</button>
    {
      error !== '' &&
      <div className="alert alert-danger" role="alert">
        {error}
      </div>

    }
     
  </form>

       
   
</main>

);
};
export default Login;