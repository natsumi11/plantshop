import './Container.css'
import Createprodactarray from './Createprodactarray';
import Createprodact from './Createprodact';
import { Cart } from './Cart';
import {randam} from './Data';
import { useEffect, useState } from 'react';

function Container(){
    const [randomProduct, setRandomProduct] = useState()

    async function getRandomProduct() {
        const result = await randam()
        setRandomProduct(result)
    }

    useEffect(() => {
        getRandomProduct()
    }, [])

    return(
            <div className="container">
                <div className="Leftcontennts ">
                    <div className="abovecontennts">
                        <div className="abovecontenntsinside">
                            <div className="abovetitle">
                                <h1>Plants are friends</h1>
                            </div> 
                            <div className="abovePlantcontainer">
                                {
                                    randomProduct == undefined 
                                        ? <div>Loading...</div> 
                                        : <Createprodact small={true} showAddCart={true} Datapara={randomProduct}></Createprodact>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <Createprodactarray></Createprodactarray>
                    </div>
                </div>
                <Cart></Cart>
            </div>
    )
}
export default Container;