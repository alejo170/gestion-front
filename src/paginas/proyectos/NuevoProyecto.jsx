import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Input from '../../componentes/Input';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { Link } from 'react-router-dom';
import DropDown from '../../componentes/DropDown';
import ButtonLoading from '../../componentes/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { Enum_TipoObjetivo } from '../../utils/enum';
import { nanoid } from 'nanoid';
import { ObjContext, useObj } from '../../context/objContext';
import { CREAR_PROYECTO } from '../../graphql/proyectos/mutation';
import { toast } from 'react-toastify';

const NuevoProyecto = () => {
  const { form, formData, updateFormData } = useFormData();
  const [listaUsuarios, setListaUsuarios] = useState({});

  // falta captura del error del query
  const { data, loading, error } = useQuery(GET_USUARIOS, {
    variables: {
      filtro: { rol: 'LIDER', estado: 'AUTORIZADO' },
    },
  });

  // falta mensaje de success
  // falta captura del error de la mutacion y revisar si se debe agregar el loading
  const [crearProyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREAR_PROYECTO);

  useEffect(() => {
    if (data) {
      const lu = {};
      data.Usuarios.forEach((elemento) => {
        lu[elemento._id] = elemento.correo;
      });

      setListaUsuarios(lu);
    }
  }, [data]);

  const submitForm = (e) => {
    e.preventDefault();

    formData.objetivos = Object.values(formData.objetivos);
    formData.presupuesto = parseFloat(formData.presupuesto);

    crearProyecto({
      variables: formData,
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Proyecto creado correctamente');
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error creando el proyecto');
    }

    if (error) {
      toast.error('Error consultando el proyecto');
    }
  }, [error, mutationError]);


  if (loading) return <div>...Loading</div>;

  return (
    <div className='form-signin'>
      
        <Link to='/admin/proyectos'>
          <i className='fas fa-arrow-left' />
        </Link>
      
      <h1 className='text-xl font-bold text-gray-900'>Crear Proyecto</h1>
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
        <Input name='nombre' label='Nombre del Proyecto' required type='text' />
        <Input
          name='presupuesto'
          label='Presupuesto del Proyecto'
          required
          type='number'
        />
        <Input
          name='fechaInicio'
          label='Fecha de Inicio'
          required
          type='date'
        />
        <Input name='fechaFin' label='Fecha de Fin' required type='date' />
        <DropDown label='Líder' options={listaUsuarios} name='lider' required />
        <Objetivos />
        <ButtonLoading text='Crear Proyecto' loading={mutationLoading} disabled={false} /> 
      </form>
    </div>
  );
};

const Objetivos = () => {
  const [listaObjetivos, setListaObjetivos] = useState([]);
  const [maxObjetivos, setMaxObjetivos] = useState(false);

  const eliminarObjetivo = (id) => {
    setListaObjetivos(listaObjetivos.filter((el) => el.props.id !== id));
  };

  const componenteObjetivoAgregado = () => {
    const id = nanoid();
    return <FormObjetivo key={id} id={id} />;
  };

  useEffect(() => {
    if (listaObjetivos.length > 4) {
      setMaxObjetivos(true);
    } else {
      setMaxObjetivos(false);
    }
  }, [listaObjetivos]);

  return (
    <ObjContext.Provider value={{ eliminarObjetivo }}>
      <div>
        <span>Objetivos del Proyecto</span>
        {!maxObjetivos && (
          <button
            type='button'
            onClick={() =>
              setListaObjetivos([
                ...listaObjetivos,
                componenteObjetivoAgregado(),
              ])
            }
          >
            <i className='fas fa-plus-square' />
          </button>
        )}
        {listaObjetivos.map((objetivo) => objetivo)}
      </div>
    </ObjContext.Provider>
  );
};

const FormObjetivo = ({ id }) => {
  const { eliminarObjetivo } = useObj();
  return (
    <div className='flex items-center'>
      <Input
        name={`nested||objetivos||${id}||descripcion`}
        label='Descripción'
        type='text'
        required
      />
      <DropDown
        name={`nested||objetivos||${id}||tipo`}
        options={Enum_TipoObjetivo}
        label='Tipo de Objetivo'
        required
      />
      <button type='button' onClick={() => eliminarObjetivo(id)}>
        <i className='fas fa-minus-square' />
      </button>
    </div>
  );
};

export default NuevoProyecto;