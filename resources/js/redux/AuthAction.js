import {SignUpService } from './services/AuthService'
import {LoginUser} from './services/AuthService'
import { createBrowserHistory } from 'history'
const browserHistory = createBrowserHistory();
export const signUp = (credentials) =>{
    console.log(credentials);
    return (dispatch)=>{
        dispatch({type:'RESTART_AUTH_RESPONSE'});
        dispatch({type:'LOADING'});
        if(credentials.password.length < 6){
            return dispatch({type: 'SHORT_PASSWORD'})
        }

        SignUpService(credentials).then((res)=>{
            console.log(res);
            if(res.token!==null){
                localStorage.setItem("user",'Bearer '+res.token);
                dispatch({type:'SIGNUP_SUCCESS'})
                setTimeout(() => {
                    history.push("/home");
                }, 3000);

            }else{
                dispatch({type:'SIGNUP_ERROR',res})
            }
        },
        error=>{
            dispatch({type:'CODE_ERROR',error});
        }

        )
    }

}


export const UserLogin = (credentials,history) =>{

 return (dispatch)=>{
    dispatch({type:'RESTART_AUTH_RESPONSE'});
    dispatch({type:'LOADING'});
     if(credentials.password.length < 6)
     {
        return dispatch({type: 'SHORT_PASSWORD'})
     }
     LoginUser(credentials,history).then((res)=>{
         console.log(res);
         if(res.success==true){
            localStorage.setItem("user",'Bearer '+res.token);
            dispatch({type:'LOGIN_SUCCESS'})
            browserHistory.push("/");


        }else{
            dispatch({type:'LOGIN_ERROR',res})
        }
    },
    error=>{
        dispatch({type:'CODE_ERROR',error});
        console.log(error)
    }

     )
 }
}


export const resetAuthResponsePerComponent = (dispatch) =>
{
  return (dispatch) =>{
      dispatch({type:'RESTART_AUTH_RESPONSE'});
  }
}
