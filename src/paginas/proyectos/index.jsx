import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { useMutation, useQuery } from '@apollo/client';
import { PROYECTOS } from '../../graphql/proyectos/queries';
import DropDown from '../../componentes/DropDown';
import { Dialog } from '@mui/material';
import { Enum_EstadoProyecto } from '../../utils/enum';
import ButtonLoading from '../../componentes/ButtonLoading';
import { EDITAR_PROYECTO } from '../../graphql/proyectos/mutation';
import useFormData from '../../hooks/useFormData';
import PrivateComponent from '../../componentes/PrivateComponent';
import { Link } from 'react-router-dom';


const AccordionStyled = styled((props) => <Accordion {...props} />)(({ theme }) => ({
  backgroundColor: '#919191',
}));
const AccordionSummaryStyled = styled((props) => <AccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: '#919191',
}));
const AccordionDetailsStyled = styled((props) => <AccordionDetails {...props} />)(({ theme }) => ({
  backgroundColor: '#ccc',
}));

const IndexProyectos = () => {
  const { data: queryData, loading} = useQuery(PROYECTOS);

  useEffect(() => {
    console.log('datos proyecto', queryData);
  }, [queryData]);

  if (loading) return <div>Cargando...</div>;

  if (queryData.Proyectos) {
    return (
      <div className='form-signin'>
        
          <h1 className='text-3xl font-bold my-4'>Lista de Proyectos</h1>
        
        <PrivateComponent roleList={['ADMINISTRADOR', 'LIDER']}>
          <div className='my-2 self-end'>
            <button type='button' className='w-100 btn-lg btn-iniciar-sesion'>
              <Link to='/admin/proyectos/nuevo'>Crear nuevo proyecto</Link>
            </button>
          </div>
        </PrivateComponent>
        {queryData.Proyectos.map((proyecto) => {
          return <AccordionProyecto proyecto={proyecto} />;
        })}
      </div>
    );
  }

  return <></>;
};

const AccordionProyecto = ({ proyecto }) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<i className='fas fa-chevron-down' />}>
          <div className='flex w-full justify-between'>
            <div className='uppercase font-bold text-gray-100 '>
              {proyecto.nombre} - {proyecto.estado}
            </div>
          </div>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <PrivateComponent roleList={['ADMINISTRADOR']}>
            <i
              className='mx-4 fas fa-pen text-yellow-600 hover:text-yellow-400'
              onClick={() => {
                setShowDialog(true);
              }}
            />
          </PrivateComponent>

          <Link to={`/admin/avances/${proyecto._id}`}>Visualizar Avance</Link>
          
          <div>Liderado Por: {proyecto.lider.correo}</div>
          <div className='flex'>
            {proyecto.objetivos.map((objetivo) => {
              return <Objetivo tipo={objetivo.tipo} descripcion={objetivo.descripcion} />;
            })}
          </div>
        </AccordionDetailsStyled>
      </AccordionStyled>
      <Dialog
        open={showDialog}
        onClose={() => {
          setShowDialog(false);
        }}
      >
        <FormEditProyecto _id={proyecto._id} />
      </Dialog>
    </>
  );
};

const FormEditProyecto = ({ _id }) => {
  const { form, formData, updateFormData } = useFormData();
  const [editarProyecto, { data: dataMutation, loading}] = useMutation(EDITAR_PROYECTO);

  const submitForm = (e) => {
    e.preventDefault();
    editarProyecto({
      variables: {
        _id,
        campos: formData,
      },
    });
  };

  useEffect(() => {
    console.log('data mutation', dataMutation);
  }, [dataMutation]);

  return (
    <div className='p-4'>
      <h1 className='font-bold'>Modificar Estado del Proyecto</h1>
      <form
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
        className='flex flex-col items-center'
      >
        <DropDown label='Estado del Proyecto' name='estado' options={Enum_EstadoProyecto} />
        <ButtonLoading disabled={false} loading={loading} text='Confirmar' />
      </form>
    </div>
  );
};

const Objetivo = ({ tipo, descripcion }) => {
  return (
    <div className='mx-5 my-4 bg-gray-50 p-8 rounded-lg flex flex-col items-center justify-center shadow-xl'>
      <div className='text-lg font-bold'>{tipo}</div>
      <div>{descripcion}</div>
      <PrivateComponent roleList={['ADMINISTRADOR']}>
        <div>Editar</div>
      </PrivateComponent>
    </div>
  );
};

export default IndexProyectos;