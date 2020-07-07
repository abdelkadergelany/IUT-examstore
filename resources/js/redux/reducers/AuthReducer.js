const initState = {
    authResponse: null,
    snakbar: false,
    favoriteList:null
}



const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                authResponse: null
            }
        case 'LOADING':
            return {
                ...state,
                authResponse: 'loading...'
            }
        case 'SHORT_PASSWORD':
            // console.log(action);
            return {
                ...state,
                authResponse: 'password is too short'
            }

        case 'SIGNUP_SUCCESS':
            //console.log(action)
            return { ...state, authResponse: 'signup was successfully done', snakbar: true, snakbarMessage: 'Account created successfully' }

        case 'SIGNUP_ERROR':
            //  console.log(action)
            return {
                ...state,
                authResponse: action.res.message, snakbar: true, snakbarMessage: 'Signup error please try again'
            }

        case 'CODE_ERROR':
            // console.log(action)
            return {
                ...state,
                authResponse: 'there seems to be a problem please try again later', snakbar: true, snakbarMessage: 'there seems to be a problem please try again later'
            }
        case 'LOGIN_SUCCESS':
            // console.log(action)
            return { ...state, authResponse: 'loged', snakbar: true, snakbarMessage: 'Welcome' }
        case 'LOGIN_ERROR':
            // console.log(action)
            return {
                ...state,
                authResponse: action.res.message, snakbar: true, snakbarMessage: 'user name or password incorrect'
            }
        case 'USER_LOGOUT':

            return { authResponse: 'Loged out successfully' }
        case 'SAVE_FAVORITE_SUCCESS':

            return { ...state, favorite: 'favorite saved', snakbar: true, snakbarMessage: 'favorite saved' }
        case 'LOGIN_FAVORITE_ERROR':

            return { ...state, favorite: 'login to save to your favorite', snakbar: true, snakbarMessage: 'login to save to your favorite' }
        case 'SAVE_FAVORITE_ERROR':

            return { ...state, favorite: 'error while saving to favorite', snakbar: true, snakbarMessage: 'error while saving to favorite' }

        case 'GET_FAVORITE_SUCCESS':

            return { ...state, snakbar: false, snakbarMessage: '',favoriteList:action.res }
        case 'CLOSE_SNAKE':

            return { ...state, snakbar: false, snakbarMessage: '' }

        default:
            return state

    }
}

export default AuthReducer;
