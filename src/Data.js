import {getProducts} from './service/Api'

export async function Data() {
    return await getProducts()
}

export async function randam(){
    const data=await Data()
    const randamnumber=Math.floor(Math.random()*data.length)
    return data[randamnumber]
}