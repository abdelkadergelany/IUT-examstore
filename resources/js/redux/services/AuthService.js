import HttpService from './HttpService';



export const SignUpService = (credentials) =>{
    const http = new HttpService();
    // console.log(HttpService);
    let signUpUrl = "user/register";
    // return http.postData(credentials,signUpUrl).then(data=>{
    //   //  console.log(JSON.stringify(data));
    //     return data;
    // }).catch((error)=> {console.log(error)
    //     return error;
    //      });
}

export const saveFavoriteService = (credentials) =>{
    const http = new HttpService();
    // console.log(HttpService);
    let signUpUrl = "user/save-favorite";
    return http.postData(credentials,signUpUrl).then(data=>{
       // console.log(JSON.stringify(data));
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
        return error;
         });
}
export const LoginUser = (credentials,propsHistory) =>{
    const http = new HttpService();
    // console.log(HttpService);
    let signUpUrl = "user/login";
    return http.postData(credentials,signUpUrl).then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
   return error;
    });
}
