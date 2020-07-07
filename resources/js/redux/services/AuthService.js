import HttpService from './HttpService';
import { signUp } from '../AuthAction';



export const SignUpService = (credentials) => {
    const http = new HttpService();
    let signUpUrl = "user/register";
    return http.postData(credentials, signUpUrl).then(data => {
        return data;
    }).catch((error) => {
        console.log(error)
        return error;
    });
}

export const saveFavoriteService = (credentials) => {
    const http = new HttpService();
    let signUpUrl = "user/save-favorite";
    return http.postData(credentials, signUpUrl).then(data => {
        console.log(JSON.stringify(data));
        return data;
    }).catch((error) => {
        console.log(error)
        return error;
    });
}
export const getFavoriteService = (credentials) => {
    const http = new HttpService();
    let signUpUrl = "user/get-favorite?page=" + credentials.page;
    return  http.getData(signUpUrl).then(data => {
        return data;
    }).catch((error) => {
      //  console.log(error)
        return error;
    });
}

export const deleteFavoriteService = (credentials) => {
    const http = new HttpService();
    let signUpUrl = "user/delete-favorite?id=" + credentials.user +'&pdf='+credentials.pdf;
    //console.log(signUpUrl);
    return  http.getData(signUpUrl).then(data => {

        return data;
    }).catch((error) => {
     //   console.log(error)
        return error;
    });
}
export const LoginUser = (credentials, propsHistory) => {
    const http = new HttpService();
    let signUpUrl = "user/login";
    return http.postData(credentials, signUpUrl).then(data => {
       // console.log(JSON.stringify(data));
        return data;
    }).catch((error) => {
       // console.log(error)
        return error;
    });
}
