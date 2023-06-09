import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const token = localStorage.getItem('access-token');
    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [token, user?.email])
    return [classes]

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