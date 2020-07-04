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
                //console.log(action)

                 return  { authResponse: 'Loged out successfully'}


        default:
            return state

    }
}

export default AuthReducer;
