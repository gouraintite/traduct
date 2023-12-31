import {register,
        login,
        forgot_password,
        reset_password, 
        activate_email, 
        change_password, 
        profile, 
        update_profile, 
        change_img, 
        resend} from "./auth.remote";


export function register_service(user){
        
    return register(user);
}

export function activate_email_service(user){
        
    return activate_email(user);
}

export  function login_service(logindto){
    return login(logindto);
}

export function forgot_password_service(identifier) {
    return forgot_password(identifier);
}

export function change_password_service(data) {
    return change_password(data)
}

export function reset_password_service(data) {
    return reset_password(data)
}

export function resend_service(data) {
    return resend(data)
}

export const logout_service = ()=> {
	localStorage.removeItem('userToken')
	setTimeout(() =>window.location.replace('/login'), 3000) 
}

//profile 

export const profile_service = () =>{
    return profile();
}

export const update_profile_service = (client) =>{
    return update_profile(client);
}

export const change_img_service = (img) =>{
    return change_img(img);
}