import { useEffect, useState } from 'react';
import Createprodact  from './Createprodact';
import {Data}  from './Data';

function Createprodactarray(){
    const[data,setdata]=useState([])

    useEffect(()=>{
        async function getdata(){
            const result=await Data()
            setdata(result)
        } 
        getdata()
    },[])


    return(
        <div  className="blowcontennts">
            {Create()}
        </div>
    )

    function Create(){
        const array=[]
        for(let eachData of data){
            array.push(<Createprodact small={false} showAddCart={true} Datapara={eachData}></Createprodact>)
        }
        return array
    }
}

export default Createprodactarray;