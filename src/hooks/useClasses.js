import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://hello-summer-server-opal.vercel.app/classes')
        return res.json();
    })
    return [classes, refetch];
   

};

export default useClasses;