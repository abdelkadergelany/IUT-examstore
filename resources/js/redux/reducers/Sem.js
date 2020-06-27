
export const Sem = (state = { }, action) => {
    switch (action.type){
    case 'FETCH_EXAMSGG':
     return {...state,payload:action.payload};
    default:
    return state;
}
};
