import { EXAMPLE_LOGIN, EXAMPLE_PRODUCTS } from "./Mock"

const callApi = false

export async function login(email, password) {
    if(!callApi) {
        return EXAMPLE_LOGIN
    }
    const result= await   fetch("/accounts/login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "email": email,
            "password": password
        })
    })
    if(result.status!=200){
        console.log("erra")
    }
    else {
        const  logintoken=await result.json()
        return logintoken
    }
}

export async function getProducts() {
    if(!callApi) {
        return EXAMPLE_PRODUCTS
    }
    const result = await fetch("/plants/")
    if(result.status != 200) {
        // ERROR :(
        return
    }
    const plants = await result.json()
    return plants
}
