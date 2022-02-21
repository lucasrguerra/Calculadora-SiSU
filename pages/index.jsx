'use strict';

import getUniversitiesOfState from '../components/data/getUniversitiesOfState';
import getQuotasOfUniversity from '../components/data/getQuotasOfUniversity';
import getCourses from '../components/data/getCourses';
import NumberInput from '../components/numberInput';
import CourseCard from '../components/courseCard';
import { useState, useEffect } from 'react';
import capitalize from 'capitalize-pt-br';
import Menu from '../components/menu';
import Head from 'next/head';

function IndexPage() {
  const [linguagens, setLinguagens] = useState('');
  const [humanas, setHumanas] = useState('');
  const [natureza, setNatureza] = useState('');
  const [matematica, setMatematica] = useState('');
  const [redacao, setRedacao] = useState('');

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [results, setResults] = useState('');

  const [state, setState] = useState('');
  const [stateData, setStateData] = useState([]);
  const [universitiesOfState, setUniversitiesOfState] = useState([]);

  const [quotas, setQuotas] = useState([]);
  const [selectedQuota, setSelectedQuota] = useState('');
  const [selectQuota, setSelectQuota] = useState(<div className="py-2">
    <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Cota<br /></label>
    <select
      className="mx-auto rounded-xl bg-white text-center border-gray-300 py-1 border-2 w-3/5"
      name="quota"
      id="quota">
    </select>
  </div>);

  const [coursesOfUniversity, setCoursesOfUniversity] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectUniversity, setSelectUniversity] = useState(<div className="py-2">
    <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Instituição<br /></label>
    <select
      className="mx-auto rounded-xl bg-white text-center border-gray-300 py-1 border-2 w-3/5"
      name="university"
      id="university">
    </select>
  </div>);

  const [course, setCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState(<div className="py-2">
    <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Curso<br /></label>
    <select
      className="mx-auto rounded-xl bg-white text-center border-gray-300 py-1 border-2 w-3/5"
      name="university"
      id="university">
    </select>
  </div>);

  useEffect(() => {
    setSelectUniversity(<div className="py-2">
      <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Instituição<br /></label>
      <select
        className="mx-auto rounded-xl bg-white text-sm md:text-base text-center border-gray-300 py-1 border-2 w-3/5"
        name="university"
        id="university"
        onChange={(event) => {
          for (const university of universitiesOfState) {
            if(university.initials == event.target.value) {
              let data = getQuotasOfUniversity(stateData, university.name)
              setQuotas(data[0]);
              setCoursesOfUniversity(data[1]);
              return setSelectedUniversity(university.name);
            };
          };
        }}
      > 
        <option>Selecione</option>
        {universitiesOfState.map((university) => {
          return <option value={university.initials} >{university.initials}</option>
        })}
      </select>
    </div>);
  }, [universitiesOfState]);

  useEffect(() => {
    if(quotas.length > 0) {
      setCoursesOfUniversity(getQuotasOfUniversity(stateData, university.name)[1]);
    };

    setSelectQuota(<div className="py-2">
      <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Cota<br /></label>
      <select
        className="mx-auto rounded-xl bg-white text-sm md:text-base text-center border-gray-300 py-1 border-2 w-3/5"
        name="quota"
        id="quota"
        onChange={(event) => {
          quotas.map((quota) => {
            if(quota == event.target.value) {
              setCourses(getCourses(coursesOfUniversity, quota))
              return setSelectedQuota(quota);
            };
          });
        }}
      > 
        <option>Selecione</option>
        {quotas.map((quota, index) => {
          return <option value={quota} >{index + 1}</option>
        })}
      </select>
    </div>);
  }, [quotas]);

  useEffect(() => {
    setSelectCourse(<div className="py-2">
      <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Curso<br /></label>
      <select
        className="mx-auto rounded-xl bg-white text-sm md:text-base text-center border-gray-300 py-1 border-2 w-11/12"
        name="course"
        id="course"
        onChange={(event) => {
          setCourse(courses[event.target.value]);
        }}
      > 
        <option>Selecione</option>
        {courses.map((coursee, index) => {
          return <option value={index} >{`${capitalize(coursee.DS_GRAU)} - ${capitalize(coursee.NO_CURSO)} - ${capitalize(coursee.DS_TURNO)}`}</option>
        })}
      </select>
    </div>);
  }, [courses]);

  useEffect(() => {
    setResults(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-4'>
      {selectedCourses.map((selectedCourse) => {
        return <CourseCard
          course={selectedCourse}
          linguagens={linguagens}
          humanas={humanas}
          natureza={natureza}
          matematica={matematica}
          redacao={redacao}
        />
      })}
    </div>
    );
  }, [selectedCourses]);

  return (
    <center className="bg-cyan-500">
      <Head>
        <title>Calculadora SiSU</title>
        <meta charset="UTF-8" />
        <meta name="author" content="Lucas Rayan Guerra" />
        <link rel="icon" href="./icon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="./icon.png" type="image/x-icon" />
        <meta name="description" content="Compare a sua nota do ENEM com as notas da edição 2021.1 do SiSU" />
        <meta property="og:title" content="Calculadora SiSU" />
        <meta property="og:url" content="https://calculadora-sisu.vercel.app/" />
        <meta property="og:image" content="https://calculadora-sisu.vercel.app/icon.png" />
        <meta property="og:description" content="Compare a sua nota do ENEM com as notas da edição 2021.1 do SiSU" />
        <meta property="og:site_name" content="Calculadora SiSU" />
        <meta property='article:author' content='https://github.com/lucasrguerra' />
      </Head>

      <div className="bg-slate-900">
        <br />
        <h1 className="text-4xl text-white font-bold">
          Calculadora SiSU
        </h1>
        <br />
        
        <div className="bg-blue-700 h-2" />
      </div>

      <br /><br />
      <p className='w-4/5 lg:w-3/5 text-4xl font-bold font-sans text-white'>
        Compare a sua nota do ENEM com as notas da edição 2021.1 do SiSU
      </p>
      <br /><br />

      <div className='mx-4 px-4 md:w-3/5 lg:w-4/5 rounded-3xl bg-white border-2 border-gray-400 shadow-xl'>
        <br />

        <div className='lg:grid lg:grid-cols-2 justify-around divide-gray-300 lg:divide-x-2 divide-y-2 lg:divide-y-0'>
          <center className='py-6 lg:py-0'>
            <h3 className='text-2xl text-blue-700 font-bold'>
              Insira abaixo suas notas do ENEM
            </h3>
            <br />

            <NumberInput
              label={'Linguagens, Códigos e suas Tecnologias'}
              id={'linguagens'}
              number={linguagens}
              setNumber={setLinguagens}
              placeholder={'700'}
            />

            <NumberInput
              label={'Ciências Humanas e suas Tecnologias'}
              id={'humanas'}
              number={humanas}
              setNumber={setHumanas}
              placeholder={'600.0'}
            />

            <NumberInput
              label={'Ciências da Natureza e suas Tecnologias'}
              id={'natureza'}
              number={natureza}
              setNumber={setNatureza}
              placeholder={'500'}
            />

            <NumberInput
              label={'Matemática e suas Tecnologias'}
              id={'matematica'}
              number={matematica}
              setNumber={setMatematica}
              placeholder={'610.5'}
            />

            <NumberInput
              label={'Redação'}
              id={'redacao'}
              number={redacao}
              setNumber={setRedacao}
              placeholder={'660'}
            />
          </center>

          <center className='py-6 lg:py-0'>
            <div className='flex justify-center'>
              <h3 className=' text-2xl text-blue-700 font-bold'>
                Escolha os cursos
              </h3>
            </div>
            <br />

            <div className="py-2">
              <label className="text-gray-500 mx-auto text-sm md:text-lg font-bold" htmlFor="nome">Estado<br /></label>
              <select
                className="mx-auto rounded-xl bg-white text-center border-gray-300 py-1 border-2 w-3/5"
                name="state"
                id="state"
                value={state}
                onChange={(event) => {
                  let data = getUniversitiesOfState(event.target.value)
                  setUniversitiesOfState(data[0]);
                  setStateData(data[1]);
                  setState(event.target.value);
                }}
              > 
                <option value="">Selecione</option>
                <option value="ac">Acre</option>
                <option value="al">Alagoas</option>
                <option value="ba">Bahia</option>
                <option value="ce">Ceará</option>
                <option value="df">Distrito Federal</option>
                <option value="es">Espítiro Santo</option>
                <option value="go">Goiás</option>
                <option value="ma">Maranhão</option>
                <option value="mg">Minas Gerais</option>
                <option value="ms">Mato Grosso do Sul</option>
                <option value="mt">Mato Grosso</option>
                <option value="pa">Pará</option>
                <option value="pb">Paraíba</option>
                <option value="pe">Pernambuco</option>
                <option value="pi">Piauí</option>
                <option value="pr">Paraná</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="rn">Rio Grande do Norte</option>
                <option value="rr">Roraima</option>
                <option value="rs">Rio Grande do Sul</option>
                <option value="sc">Santa Catarina</option>
                <option value="se">Sergipe</option>
                <option value="sp">São Paulo</option>
                <option value="to">Tocantins</option>
              </select>
            </div>
            
            {selectUniversity}
            <p className='w-4/5 h-16 lg:h-14'>{selectedUniversity}</p>

            {selectQuota}
            <p className='w-4/5 h-54 lg:h-48'>{selectedQuota}</p>

            {selectCourse}
            
            <br />
            <button
              className='rounded-xl border shadow-xl py-2 px-3 font-bold hover:bg-blue-600 bg-white hover:text-white text-blue-600 transition hover:scale-90'
              onClick={(event) => {
                event.preventDefault();
                if(course && selectedCourses.indexOf(course) == -1) {
                  setSelectedCourses([...selectedCourses, course]);
                  setCourse(false);
                };
              }}
            >Adicionar curso</button>
          </center>
        </div>

        <br />
      </div>
      
      <br /><br />
      <p className='w-4/5 lg:w-3/5 text-4xl font-bold font-sans text-white'>
        Confira aqui os resultados
      </p>
      <br /><br />

      {results}
      
      <br /><br />
      <button
        className='rounded-xl border shadow-xl text-2xl py-2 px-3 font-bold hover:bg-blue-600 bg-white hover:text-white text-blue-600 transition hover:scale-90'
        onClick={(event) => {
          event.preventDefault();
          setSelectedCourses([]);
        }}
      >Limpar resutados</button>
      <br /><br />

      <br />
      <div className="bg-blue-700 h-2" />
      <div className="bg-slate-900 py-2">
        <a
          className="text-1xl text-white font-bold hover:underline"
          href="https://www.linkedin.com/in/lucasrguerra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2021 - 2022 Lucas Rayan Guerra
        </a>
      </div>
    </center>
  )
};
export default IndexPage;
