const REGISTRATION = "REGISTRATION"

export function registrationActionCreator(value){
    return {
        type:REGISTRATION,
        firstName:value.firstName,
        lastName:value.lastName,
        mail:value.mail,
        password:value.password,
    }
}

export {REGISTRATION};
export default registrationActionCreator;