const LOGIN = "LOGIN"
export function loginActionCreator(value){
    return {
        type:LOGIN,
        mail:value.mail,
        password:value.password,
    }
}

export {LOGIN};
export default loginActionCreator