import axios from "axios";
import { FETCH_BUTTON_CLICKED,SELECT_POST } from "./Types";

// export const fetchPosts = () => {
//   return {
//     type: FETCH_BUTTON_CLICKED,
//     payload: [
//       {
//         userId: 1,
//         id: 1,
//         title: "my name is sheela",
//         body: "Hello sheela whats up",
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: "my name is kamala",
//         body: "Hello kamala whats up",
//       },
//       {
//         userId: 1,
//         id: 3,
//         title: "my name is nimala",
//         body: "Hello nimala whats up",
//       },
//       {
//         userId: 1,
//         id: 4,
//         title: "my name is sunila",
//         body: "Hello sunila whats up",
//       },
//     ],
//   };
// };

// export function fetchPosts(){
//   return function(dispatch){
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>{
//       dispatch({
//         type:FETCH_BUTTON_CLICKED,
//         payload:res.data
//       })
//     })
//   }
// }

export const fetchPosts=() => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5").then((res) => {
    dispatch({
      type: FETCH_BUTTON_CLICKED,
      payload: res.data,
    });
  });
};

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,     ///////for reducer
  };
};
