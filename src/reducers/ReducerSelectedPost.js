import {SELECT_POST} from '../actions/Types'

// export default function (state=null,action){
//     switch(action.type){
//         case SELECT_POST:
//             return action.payload;

//     }
//     return state
// }


export default function (state = null, action) {
    switch (action.type) {
      case SELECT_POST:
        return action.payload;
      default:
        return state;
    }
  }
  