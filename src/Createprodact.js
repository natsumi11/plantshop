import './Prodact.css'
import { useContext } from 'react';
import { CartDispatchcontext } from './Provider/Cartprovider';

function Createprodact({showAddCart,small,Datapara}){
    const CartDispatch=useContext(CartDispatchcontext)

    return(
        <div>
            <div className="plant">
                <img className={getImageClass()} src={Datapara.imageUrl}></img> 
                <div className="name">{Datapara.name}</div>
                <div className="price">{Datapara.price}</div>
                <div className="description">{Datapara.description}</div>
                {showAddToCart()}
            </div>
        </div>
    )

    function onclickfunc(Datapara){
        CartDispatch({
            type:"add",
            Datapara:Datapara
        })
    }

    function showAddToCart() {
        if(!showAddCart) {
            return
        }
        return (
            <div className="addtocartContainer">
                <div className="addtocart" onClick={()=>onclickfunc(Datapara)}>add to cart</div>
            </div>
        )
    }
    
    function getImageClass() {
        // if(small) { 
        //     return "plant-img-small" 
        // } else  { 
        //     return "plant-img-normal"
        // }
        return small ? "plant-img-small" : "plant-img-normal"
    }
}

export default Createprodact;