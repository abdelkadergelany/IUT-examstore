
export const Exams = (state = { }, action) => {
    switch (action.type){
    case 'FETCH_EXAMS':

     return action.payload;
    default:
    return state;
}
};
