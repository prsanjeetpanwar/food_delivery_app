export interface CreateVendorInputs{
    name:string,
    ownerName:string,
    foodType:[string],
    pinCode:string,
    address:string,
    phone:number,
    email:string,
    password:string

}


export interface LoginVendorInputs {
    email: string
    password: string
}
