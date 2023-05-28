const MY_INFO = "MY_INFO"

export function myInfoActionCreator(value){
    return {
        type:MY_INFO,
        ail:value.mail,
        firstName:value.firstName,
        lastName:value.lastName,
        phone:value.phone,
        university:value.university,
        resume:value.resume,
    }
}

export {MY_INFO};
export default myInfoActionCreator;