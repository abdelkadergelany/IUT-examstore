import * as ActionTypes from './ActionType';
import { trackPromise } from 'react-promise-tracker';

export const FETCH_EXAMS = (param) => (dispatch) => {
    return trackPromise(
        fetch('http://localhost:8000/api/pdf?dept=' + param.dept + '&sem=' + param.sem + '&page=' + param.page + '&type=' + param.type + '&year=' + param.year)
            .then(response => {
                if (response.ok) {
                    //  console.log(response)
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    // console.log(error);
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    // console.log(errmess);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response => dispatch({ type: ActionTypes.FETCH_EXAMS, payload: response }))
            .catch(error => dispatch({ payload: error.message }))

    );
};
export const POST_PAPER = (param) => (dispatch) => {

    return trackPromise(
        fetch('http://localhost:8000/api/post-paper',{
            method: 'POST',
            body:param
        })
            .then(response => {return response},
                error => {
                    var errmess = new Error(error.message);
                     console.log(errmess);
                    throw errmess;
                })
            .then(response =>response.json())
            .then(response => dispatch({ type: 'POST_PAPER_SUCCESS', payload: response }))
            .catch(error => {
                console.log(error);
                dispatch({ type: 'POST_PAPER_ERROR',payload: error.message })})
    );
};

export const SET_FILTER = (param) => (dispatch) => {
    return dispatch({ type: ActionTypes.SET_FILTER, payload: param })
};
