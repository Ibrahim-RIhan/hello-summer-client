import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://hello-summer-server-opal.vercel.app/users')
        return res.json();
    })
    return [users, refetch];

};

export default useUsers;