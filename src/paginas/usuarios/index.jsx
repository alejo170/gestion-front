import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enum';
import PrivateComponent from '../../componentes/PrivateComponent';

const IndexUsuarios = () => {
  const { data, error, loading } = useQuery(GET_USUARIOS);

  useEffect(() => {
    console.log('data servidor', data);
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);

  if (loading) return <div>Cargando....</div>;

  return (
    <div>
      Datos Usuarios:
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Identificación</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>

        <PrivateComponent roleList={['LIDER']}>

        <tbody>
          {data &&
          // eslint-disable-next-line
            data.Usuarios.map((u) => {

              if (u.rol === "ESTUDIANTE") {

              return (

                
                
                <tr key={u._id}>
                  <td>{u.nombre}</td>
                  <td>{u.apellido}</td>
                  <td>{u.correo}</td>
                  <td>{u.identificacion}</td>
                  <td>{Enum_Rol[u.rol]}</td>
                  
                  <td>{Enum_EstadoUsuario[u.estado]}</td>

          

                  <td>
                     <Link to={`/admin/usuarios/editar/${u._id}`}>
                      <i className='fas fa-pen' />
                    </Link>
                  </td>  
                </tr>
              );

              }

            })}
        </tbody>

        </PrivateComponent>

        <PrivateComponent roleList={['ADMINISTRADOR']}>

<tbody>
  {data &&
    data.Usuarios.map((u) => {

      

      return (

        
        
        <tr key={u._id}>
          <td>{u.nombre}</td>
          <td>{u.apellido}</td>
          <td>{u.correo}</td>
          <td>{u.identificacion}</td>
          <td>{Enum_Rol[u.rol]}</td>
          
          <td>{Enum_EstadoUsuario[u.estado]}</td>

  

          <td>
             <Link to={`/admin/usuarios/editar/${u._id}`}>
              <i className='fas fa-pen' />
            </Link>
          </td>  
        </tr>
      );

      

    })}
</tbody>

</PrivateComponent>


      </table>
    </div>
  );
};

export default IndexUsuarios;