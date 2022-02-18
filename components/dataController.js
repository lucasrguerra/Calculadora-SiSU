'use strict';

import ac from '../public/ac.json';
import al from '../public/al.json';
import ba from '../public/ba.json';
import ce from '../public/ce.json';
import df from '../public/df.json';
import es from '../public/es.json';
import go from '../public/go.json';
import ma from '../public/ma.json';
import mg from '../public/mg.json';
import ms from '../public/ms.json';
import mt from '../public/mt.json';
import pa from '../public/pa.json';
import pb from '../public/pb.json';
import pe from '../public/pe.json';
import pi from '../public/pi.json';
import pr from '../public/pr.json';
import rj from '../public/rj.json';
import rn from '../public/rn.json';
import rr from '../public/rr.json';
import rs from '../public/rs.json';
import sc from '../public/sc.json';
import se from '../public/se.json';
import sp from '../public/sp.json';
import to from '../public/to.json';

function getDataOfState(state) {
  switch(state) {
    case 'ac': return ac;
    case 'al': return al;
    case 'ba': return ba;
    case 'ce': return ce;
    case 'df': return df;
    case 'es': return es;
    case 'go': return go;
    case 'ma': return ma;
    case 'mg': return mg;
    case 'ms': return ms;
    case 'mt': return mt;
    case 'pa': return pa;
    case 'pb': return pb;
    case 'pe': return pe;
    case 'pi': return pi;
    case 'pr': return pr;
    case 'rj': return rj;
    case 'rn': return rn;
    case 'rr': return rr;
    case 'rs': return rs;
    case 'sc': return sc;
    case 'se': return se;
    case 'sp': return sp;
    case 'to': return to;

    default: return [];
  };
};
export default getDataOfState;