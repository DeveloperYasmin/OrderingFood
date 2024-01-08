import { useEffect, useState } from "react"
const User=({name})=>{
    
    const[count,setcount]=useState(0)
    useEffect(()=>{
    const timer=setInterval(()=>{
    //  console.log("Hii")
    },1000)
    // console.log("USeEffect")
    return()=>{
        clearInterval(timer)
        // console.log("USeEffect return")

    }
   },[])
//    console.log("render")
   
    return (<div className="user-card">
        <button onClick={()=>{
            setcount(count+1)
        }}>
            Update
        </button>
        <h2>Count={count}</h2>
        <h2>Name:{name}</h2>
        <h2>Location:Madurai</h2>
        <h3>Contact:@Yasmin</h3>

    </div>)
}

export default User