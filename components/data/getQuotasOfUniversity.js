'use strict';

import capitalize from 'capitalize-pt-br';

function getQuotasOfUniversity(stateData, university) {
  let control = [];
  let quotas = [];
  let coursesOfUniversity = []
  for (const course of stateData) {
    if(capitalize(course.NO_IES) == university) {
      coursesOfUniversity.push(course);
      if(control.indexOf(course.DS_MOD_CONCORRENCIA) == -1) {
        control.push(course.DS_MOD_CONCORRENCIA);
        quotas.push(course.DS_MOD_CONCORRENCIA);
      };
    };
  };
  return [quotas, coursesOfUniversity];
};
export default getQuotasOfUniversity;