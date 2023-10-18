export function CartReducer(cartlist,action){
    if(action.type=="add"){
        const addcartlist={
            a: action.Datapara,
            b: 1
        }
        return[addcartlist,...cartlist]
    }
    else if(action.type=="remove"){
        const cartlistcopy = [...cartlist];
        const found=cartlistcopy.findIndex(item => item === action.eachcartlist);
        cartlistcopy.splice(found, 1)
        return cartlistcopy
    }
    else if(action.type=="changecount"){
        action.eachcartlist.b=action.newcount
        return[...cartlist]
    }
}