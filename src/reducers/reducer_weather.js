import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action){
  switch (action.type) {
    case FETCH_WEATHER :
      // return state.concat([action.payload.data]); //use .concat instead of .push b/c push will mutate original state and that is what redux does not want to do
      return [ action.payload.data, ...state ]; //same as line 6 w/ ES6
  }
  return state;
}