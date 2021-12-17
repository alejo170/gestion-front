import React, { useEffect } from 'react';
import Input from '../../componentes/Input';
import { Enum_Rol } from '../../utils/enum';
import DropDown from '../../componentes/DropDown';
import ButtonLoading from '../../componentes/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { Link } from 'react-router-dom';
import { REGISTRO } from '../../graphql/autenticacion/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';



const Registrar = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { form, formData, updateFormData } = useFormData();

//  const [registro, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
  const [registro, { data: dataMutation, loading: loadingMutation }] =
    useMutation(REGISTRO);

  const submitForm = (e) => {
    e.preventDefault();
    registro({ variables: formData });
  };

  
useEffect(() => {

  if (dataMutation) {
      if (dataMutation.registro.token) {
          
          setToken(dataMutation.registro.token);
          navigate('/Login');
      }
    }
  
}, [dataMutation, setToken, navigate]);

return (
    <div className='form-signin'>
      <div className='imagenHome'>
        <Link to='/'>
            <i class="fas fa-home fa-2x"></i>
        </Link>
    </div>
      <h1 className='text-3xl font-bold my-4'>Regístrate</h1>
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div>
          <Input label='Nombre:' name='nombre' type='text' required />
          <Input label='Apellido:' name='apellido' type='text' required />
          <Input label='Documento:' name='identificacion' type='text' required />
          <DropDown label='Rol deseado:' name='rol' required={true} options={Enum_Rol} />
          <Input label='Correo:' name='correo' type='email' required />
          <Input label='Contraseña:' name='password' type='password' required />
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={loadingMutation}
          text='Registrarme'
        />
      </form>
      <span>¿Ya tienes una cuenta? </span>
      <Link to='/login'>
        <span className='text-blue-700'>Inicia sesión</span>
      </Link>
    </div>
  );
};

export default Registrar;