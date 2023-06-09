import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";


const useClasses = () => {
    const {user} = useContext(AuthContext)
   const [classes, setClasses] =useState([])
   useEffect(()=>{
    fetch(`http://localhost:5000/?email=${user?.email}`)
    .then(res=> res.json())
    .then(data =>setClasses(data))
   },[])
    return [classes]

};

export default useClasses;