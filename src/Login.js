import React from "react";
import { useState } from "react";

const Login = () =>{
    let [Num,setNum] = useState("");

    return <div>
     <input  maxLength = {10} onChange={(event) => {
        setNum(event.target.value);


        

    }} type="number" />
</div>


}
export default Login;