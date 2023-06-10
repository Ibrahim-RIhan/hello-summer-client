
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })
    return [classes, refetch];
   
    // // const { user } = useContext(AuthContext)
    // const [classes, setClasses] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/classes`)
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    // }, [])
    
    // return [classes]


    // const { user, loading } = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();

    // const { refetch, data: classes = [] } = useQuery({
    //     queryKey: ['classes', user?.email],
    //     enabled: !loading,
    // queryFn: async () => {
    //     const res = await axiosSecure(`/classes?email=${user?.email}`)
    //     return res.data;
    // }
    //    queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`, { headers: {
    //             authorization: `bearer ${token}`
    //         }})
    //         return res.json();
    //     },

    // })
    // return [classes, refetch]


};

export default useClasses;