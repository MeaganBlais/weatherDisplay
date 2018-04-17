import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // // es5
      // return state.concat([action.payload.data]);
      // es6 is nearly identical results but puts new entry in front
      // ... means it might be an array so take all the entries
      //  inside of it and insert it into this new array
      return [ action.payload.data, ...state ];
  }
  return state;
}