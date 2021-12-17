import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import ButtonLoading from '../../componentes/ButtonLoading';
import Input from '../../componentes/Input';
import { EDITAR_PERFIL } from '../../graphql/usuarios/mutations';
import useFormData from '../../hooks/useFormData';
import { uploadFormData } from '../../utils/uploadFormData';
import { useUser } from '../../context/userContext';
import { GET_USUARIO } from '../../graphql/usuarios/queries';
import { toast } from 'react-toastify';

const Profile = () => {
  
  const { form, formData, updateFormData } = useFormData();
  const { userData, setUserData } = useUser();

  const [editarPerfil, { data: dataMutation, loading: loadingMutation }] =
    useMutation(EDITAR_PERFIL);

  const {
    data: queryData,
    loading: queryLoading,
    
    refetch,
  } = useQuery(GET_USUARIO, {
    variables: {
      _id: userData._id,
    },
  });

  useEffect(() => {
    if (dataMutation) {
      console.log('data mutation', dataMutation);
      setUserData({ ...userData });
      toast.success('Perfil modificado con exito');
      refetch();
    }
  // eslint-disable-next-line  
  }, [dataMutation]);

  useEffect(() => {
    console.log('ud', queryData);
  }, [queryData]);

  const submitForm = async (e) => {
    e.preventDefault();

    const formUploaded = await uploadFormData(formData);

    console.log('form cargado', formUploaded);

    editarPerfil({
      variables: {
        _id: userData._id,
        campos: formUploaded,
      },
    });
  };

  if (queryLoading) return <div>Loading...</div>;

  return (
    <div className='form-signin'>
      <h1 className='text-xl font-bold text-gray-900'>Tu Perfil</h1>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <Input
          defaultValue={queryData.Usuario.nombre}
          label='Nombre'
          name='nombre'
          type='text'
          required={true}
        />
        <Input
          defaultValue={queryData.Usuario.apellido}
          label='Apellido'
          name='apellido'
          type='text'
          required={true}
        />
        <Input
          defaultValue={queryData.Usuario.identificacion}
          label='Identificación'
          name='identificacion'
          type='text'
          required={true}
        />
        <Input
          defaultValue={queryData.Usuario.correo}
          label='Correo'
          name='correo'
          type='text'
          required={true}
        />
        <br />
        <br />
        
        <ButtonLoading text='Confirmar' loading={loadingMutation} disabled={false} />
      </form>
    </div>
  );
};

export default Profile;