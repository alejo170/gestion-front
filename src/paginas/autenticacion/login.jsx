import '../../estilos/login.css';
import React, { useEffect } from 'react';
import ButtonLoading from '../../componentes/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/autenticacion/mutations';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { form, formData, updateFormData } = useFormData();

  

  //  const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
  const [login, { data: dataMutation, loading: mutationLoading }] =
    useMutation(LOGIN);

  const submitForm = (e) => {
    e.preventDefault();

    login({
      variables: formData,
    });
  };


  useEffect(() => {

  try{  
    
    if (dataMutation) {
      if (dataMutation.login.token) {
        setToken(dataMutation.login.token);
        navigate('/admin');
      }
    }
  } 
  
  catch(error){
    
    alert("Correo o contraseña incorrectos");
}
}, [dataMutation, setToken, navigate]);

  
return (
    
<div className='form-signin'>
<br />
<div className='imagenHome'>
        <Link to='/'>
            <i class="fas fa-home fa-3x"></i>
        </Link>
    </div>
    <br />
  <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>

  <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
    
  <div class="form-floating">
    <input class="form-control" id="floatingInput" name='correo' placeholder="name@example.com" type='email' label='Correo' required={true} />
    <label for="floatingInput">Correo</label>
    </div>
    <br />
    <br />
    <div class="form-floating">  
    <input class="form-control" id="floatingInput" name='password' placeholder="Password" type='password' label='Contraseña' required={true} />
    <label for="floatingPassword">Contraseña</label>
    </div>
    <br />
    <br />
    
    
    
    <ButtonLoading
      disabled={Object.keys(formData).length === 0}
      loading={mutationLoading}
      text='Iniciar sesión'
    />
  

  </form>
  <br />
  <span>¿No tienes una cuenta? </span>
  <Link to='/registro'>
    <span className='text-blue-700'>Regístrate</span>
  </Link>
</div>
);
};

export default Login;