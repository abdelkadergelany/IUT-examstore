export const Filters = (state = { }, action) => {
    switch (action.type){
    case 'FetchPosts':
     return {...state,payload:action.payload};
    default:
    return state;
}
};
