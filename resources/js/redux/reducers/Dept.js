
export const Dept = (state = { }, action) => {
    switch (action.type){
    case 'FETCH_EXAMS':
     return {...state,payload:action.payload};
    default:
    return state;
}
};
