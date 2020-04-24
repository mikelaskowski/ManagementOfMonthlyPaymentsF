export class User{
    id: number;
    name: string
    email: string;
    userName: string;
    password: string;
    token: string;
    //tokenExpirationDate: Date;

    constructor(id: number, name: string, email: string, userName: string, password: string, token: string){
        this.id=id;
        this.name=name;
        this. email=email;
        this.userName=userName;
        this.password=password;
        this.token=token;
    }
}