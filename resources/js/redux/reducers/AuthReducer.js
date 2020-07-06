const initState = {
    authResponse: null
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
            return {
                ...state,
                authResponse: 'signup was successfully done',
            }

        case 'SIGNUP_ERROR':
            //  console.log(action)
            return {
                ...state,
                authResponse: action.res.message,
            }

        case 'CODE_ERROR':
            // console.log(action)
            return {
                ...state,
                authResponse: 'there seems to be a problem please try again later',
            }
        case 'LOGIN_SUCCESS':
            // console.log(action)
            return {
                ...state,
                authResponse: 'loged',
            }
        case 'LOGIN_ERROR':
            // console.log(action)
            return {
                ...state,
                authResponse: action.res.message,
            }
        case 'USER_LOGOUT':

            return { authResponse: 'Loged out successfully' }
        case 'SAVE_FAVORITE_SUCCESS':

            return { ...state, favorite: 'favorite saved' }
        case 'LOGIN_FAVORITE_ERROR':

            return { ...state, favorite: 'login to save to your favorite' }
        case 'SAVE_FAVORITE_ERROR':

            return { ...state, favorite: 'error while saving to favorite' }

        default:
            return state

    }
}

export default AuthReducer;
