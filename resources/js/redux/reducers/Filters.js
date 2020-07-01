export const Filters = (state = {type:'all',year:'all',sem:null,dept:null}, action) => {
    switch (action.type){
    case 'SET_FILTER':
     return {...state,payload:action.payload};
    default:
    return state;
}
};
