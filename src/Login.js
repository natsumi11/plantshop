import { useRef } from 'react';
import { login } from './service/Api'

export function Login(){
    const idelement = useRef()
    const passwordelement=useRef()

    async function loginhandle(idelement,passwordelement){
        const idvalue=idelement.current.value
        const passwordvalue=passwordelement.current.value

        if(idvalue==""&&passwordvalue==""){
            console.log("ID&password empty")
        }
        else if(idvalue==""){
            console.log("ID empty")
        }
        else if(passwordvalue==""){
            console.log("password empty")
        }
        else {
            console.log(idvalue,passwordvalue)
            const result = login(idvalue, passwordvalue)
            console.log(result)
        }
    }

    return (
        <div>
           <input placeholder="ID" ref={idelement}></input>
           <input type="password" placeholder="Password" ref={passwordelement}></input>
           <button onClick={()=>loginhandle(idelement,passwordelement)}>Login</button>
        </div>
    )
}