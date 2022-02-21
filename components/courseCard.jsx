'use strict';

import capitalize from 'capitalize-pt-br';

function CourseCard({ course, linguagens, humanas, natureza, matematica, redacao }) {
  var sumLinguagens = (linguagens * course.PESO_LINGUAGENS);
  var sumHumanas = (humanas * course.PESO_CIENCIAS_HUMANAS);
  var sumNatureza = (natureza * course.PESO_CIENCIAS_NATUREZA);
  var sumMatematica = (matematica * course.PESO_MATEMATICA);
  var sumRedacao = (redacao * course.PESO_REDACAO);

  console.log(sumRedacao)
  var sumGrades = sumLinguagens + sumHumanas + sumNatureza + sumMatematica + sumRedacao;
  var sumWeights = course.PESO_LINGUAGENS + course.PESO_CIENCIAS_HUMANAS + course.PESO_CIENCIAS_NATUREZA + course.PESO_MATEMATICA + course.PESO_REDACAO;
  var grade = parseFloat((sumGrades / sumWeights) * (parseFloat(course.NU_PERCENTUAL_BONUS) / 100)).toFixed(2);

  var status = (<span className='font-bold text-red-600'>Reprovad@</span>);

  if(parseFloat(grade) > course.NU_NOTACORTE &&
    linguagens > course.NOTA_MINIMA_LINGUAGENS &&
    humanas > course.NOTA_MINIMA_CIENCIAS_HUMANAS &&
    natureza > course.NOTA_MINIMA_CIENCIAS_NATUREZA &&
    matematica > course.NOTA_MINIMA_MATEMATICA &&
    redacao > course.NOTA_MINIMA_REDACAO
  ) {
    status = (<span className='font-bold text-green-700'>Aprovad@!</span>);
  };
  
  return (
    <center className="col-span-1 rounded-xl bg-white border-2 border-teal-700 shadow-xl">
      <div className="bg-teal-500 py-1 px-2 text-lg font-semibold rounded-t-lg text-white">
        <h4>{capitalize(course.NO_CURSO)}</h4>
      </div>
      
      <div className='pb-2 px-2 rounded-b-lg'>
        <p className='py-2 text-lg font-bold'>Informações do curso</p>

        <div className='flex divide-x-2 justify-aroung gap-3'>
          <div className='w-6/12'>
            <p className='font-semibold'>Instuição:&nbsp;
              <span className='font-bold text-blue-700'>{(course.SG_IES).toUpperCase()}</span>
            </p>
            <p className='font-semibold'>Grau:&nbsp;
              <span className='font-bold text-blue-700'>{capitalize(course.DS_GRAU)}</span>
            </p>
            <p className='font-semibold'>Turno:&nbsp;
              <span className='font-bold text-blue-700'>{capitalize(course.DS_TURNO)}</span>
            </p>
          </div>

          <div className='w-6/12'>
            <p className='font-semibold'>Sua nota:&nbsp;
              <span className='font-bold text-blue-700'>{grade}</span>
            </p>
            <p className='font-semibold'>Corte:&nbsp;
              <span className='font-bold text-blue-700'>{course.NU_NOTACORTE}</span>
            </p>
            <p className='font-semibold'>Status:&nbsp;
              {status}
            </p>
          </div>
        </div>
        <div>
          <p className='font-semibold'>Quantidades de Períodos:&nbsp;
            <span className='font-bold text-blue-700'>{course.QT_SEMESTRE}</span>
          </p>
          <p className='font-semibold'>Vagas ofertadas:&nbsp;
            <span className='font-bold text-blue-700'>{course.QT_VAGAS_OFERTADAS}</span>
          </p>
          <p className='font-semibold'>Inscritos:&nbsp;
            <span className='font-bold text-blue-700'>{course.QT_INSCRICAO}</span>
          </p>
        </div>
        

        <p className='py-2 text-lg font-bold'>Notas mínimas</p>

        <div>
          <p className='font-semibold'>Mínima em Linguagens:&nbsp;
            <span className='font-bold text-blue-700'>{course.NOTA_MINIMA_LINGUAGENS}</span>
          </p>
          <p className='font-semibold'>Mínima em Humanas:&nbsp;
            <span className='font-bold text-blue-700'>{course.NOTA_MINIMA_CIENCIAS_HUMANAS}</span>
          </p>
          <p className='font-semibold'>Mínima em Natureza:&nbsp;
            <span className='font-bold text-blue-700'>{course.NOTA_MINIMA_CIENCIAS_NATUREZA}</span>
          </p>
          <p className='font-semibold'>Mínima em Matemática:&nbsp;
            <span className='font-bold text-blue-700'>{course.NOTA_MINIMA_MATEMATICA}</span>
          </p>
          <p className='font-semibold'>Mínima na Redação:&nbsp;
            <span className='font-bold text-blue-700'>{course.NOTA_MINIMA_REDACAO}</span>
          </p>
        </div>

        <p className='py-2 text-lg font-bold'>Dados do Instituição</p>
        <div>
          <p className='font-semibold'>Campus:&nbsp;
            <span className='font-bold text-blue-700'>{capitalize(course.NO_CAMPUS)}</span>
          </p>
          <p className='font-semibold'>Município:&nbsp;
            <span className='font-bold text-blue-700'>{course.NO_MUNICIPIO_CAMPUS}</span>
          </p>
          <p className='font-semibold'>Organização:&nbsp;
            <span className='font-bold text-blue-700'>{course.DS_ORGANIZACAO_ACADEMICA}</span>
          </p>
          <p className='font-semibold'>Administração:&nbsp;
            <span className='font-bold text-blue-700'>{course.DS_CATEGORIA_ADM}</span>
          </p>
        </div>

      </div>
    </center>
  );
};
export default CourseCard;