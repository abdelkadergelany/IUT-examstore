import * as ActionTypes from './ActionType';

export const FETCH_EXAMS = () => (dispatch) => {
    return fetch('http://localhost:8000/api/pdf')
    .then(response => {
        if (response.ok) {
            console.log(response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          console.log(error);
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            console.log(errmess);
            throw errmess;
      })
    .then(response => response.json())
    .then(response =>dispatch({type:ActionTypes.FETCH_EXAMS,payload:response.data}))
    .catch(error => dispatch({payload:error.message}));
};
