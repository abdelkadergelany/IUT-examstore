
export const Exams = (state = { }, action) => {
    switch (action.type){
    case 'FETCH_EXAMS':
     return {...state,payload:action.payload};
    default:
    return state;
}
};
