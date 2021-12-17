import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from '../../graphql/usuarios/queries';
import Input from '../../componentes/Input';
import ButtonLoading from '../../componentes/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from '../../graphql/usuarios/mutations';
import DropDown from '../../componentes/DropDown';
import { Enum_EstadoUsuario } from '../../utils/enum';

const EditarUsuario = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_USUARIO, {
    variables: { _id },
  });

  console.log(queryData);

  const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_USUARIO);

  const submitForm = (e) => {
    e.preventDefault();
    console.log('fd', formData);
    delete formData.rol;
    editarUsuario({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Estado modificado correctamente');
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el estado');
    }

    if (queryError) {
      toast.error('Error consultando el estado');
    }
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className='form-signin'>
      
      <Link to='/admin/usuarios'>
        <i className='fas fa-arrow-left ' />
      </Link>
      <br />
      <h1 className='text-xl font-bold text-gray-900'>Editar Estado</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <div style={{ display: 'none' }}>
        <Input
          label='Nombre de la persona:'
          type='text'
          name='nombre'
          defaultValue={queryData.Usuario.nombre}
          required={true}
          
          
        />
        </div>
        <div style={{ display: 'none' }}>
        <Input
          label='Apellido de la persona:'
          type='text'
          name='apellido'
          defaultValue={queryData.Usuario.apellido}
          required={true}
        />
        </div>
        <div style={{ display: 'none' }}>
        <Input
          label='Correo de la persona:'
          type='email'
          name='correo'
          defaultValue={queryData.Usuario.correo}
          required={true}
        />
        </div>
        <div style={{ display: 'none' }}>
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'
          defaultValue={queryData.Usuario.identificacion}
          required={true}
        />
        </div>
        <span>Nombre del usuario: {queryData.Usuario.nombre}</span>
        <br />
        <span>Apellido del usuario: {queryData.Usuario.apellido}</span>
        <br />
        <span>Correo del usuario: {queryData.Usuario.correo}</span>
        <br />
        <span>Identificacion del usuario: {queryData.Usuario.identificacion}</span>
        <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={queryData.Usuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
        />
        <span>Rol del usuario: {queryData.Usuario.rol}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
    </div>
  );
};


export default EditarUsuario;