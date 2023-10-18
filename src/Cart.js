import { useContext } from 'react';
import { cartlistcontext,CartDispatchcontext } from './Provider/Cartprovider';
import Createprodact from './Createprodact';

export function Cart(){
    const cartlist=useContext(cartlistcontext)
    const CartDispatch=useContext(CartDispatchcontext)
    
    function removefunction(eachcartlist){
        CartDispatch({type:"remove",
            eachcartlist:eachcartlist
        })
    }
    function pluscount(eachcartlist){
        CartDispatch({
            type:"changecount",
            eachcartlist:eachcartlist,
            newcount:eachcartlist.b+1
        })
    }
    function minuscount(eachcartlist){
        if(eachcartlist.b==1){
            removefunction(eachcartlist)
        }
        else{
            CartDispatch({
                type:"changecount",
                eachcartlist:eachcartlist,
                newcount:eachcartlist.b-1
            })
        }
    }
    return(
        <div className='Cart'>
            {cartlist.map(eachcartlist=>
            <div>
                <span onClick={()=>removefunction(eachcartlist)}>
                    X
                </span>
                <Createprodact small={true} Datapara={eachcartlist.a}></Createprodact>
                <div>{eachcartlist.b}</div>
                <button onClick={()=>pluscount(eachcartlist)}>+</button>
                <button onClick={()=>minuscount(eachcartlist)}>-</button>
            </div>
            )}
        </div>
    )
}

