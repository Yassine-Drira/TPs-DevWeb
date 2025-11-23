interface User{
    name:string;
    id:number;
    email?:string;
    readonly isAdmin: boolean;
}
let user1:User={ 
    name:"Yassine",
    id:10001,
    isAdmin:true
}
interface Admin extends User{
permissions:string[];   
}
