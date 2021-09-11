type GetUserNameType = (firstName: string, lastName: string) => { // 与尖头函数无关的箭头，只是分割
    name: string
}

let getUserName: GetUserNameType = function(
    firstName:string,
    lastName:string
){
    return {
        name: firstName + lastName
    }
}

