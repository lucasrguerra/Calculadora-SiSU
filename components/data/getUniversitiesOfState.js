'use strict';

import getDataOfState from '../dataController';
import capitalize from 'capitalize-pt-br';

function getUniversitiesOfState(state) {
  const stateData = getDataOfState(state);
  
  let control = [];
  let universities = [];
  stateData.map((course) => {
    if(control.indexOf(course.SG_IES) == -1) {
      control.push(course.SG_IES);
      universities.push({
        initials: course.SG_IES,
        name: capitalize(course.NO_IES)
      });
    };
  });

  return [universities, stateData];
};
export default getUniversitiesOfState;