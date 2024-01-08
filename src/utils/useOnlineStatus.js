import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlineStatus,setonlinestatus]=useState(true);
    useEffect(()=>{
      window.addEventListener("offline",()=>{
            setonlinestatus(false)
      })
      window.addEventListener("online",()=>{
        setonlinestatus(true)
  })
    },[])


  return onlineStatus
}

export default useOnlineStatus