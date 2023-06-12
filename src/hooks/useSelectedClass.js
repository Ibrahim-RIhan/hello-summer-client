import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';


const useSelectedClass = () => {
    const {user} =useContext(AuthContext)
    const { data: selectedClasses = [], refetch } = useQuery(['selectedClass'], async () => {
        const res = await fetch(`https://hello-summer-server-opal.vercel.app/selectedClass/${user?.email}`)
        return res.json();
    })
    return [selectedClasses, refetch];
};

export default useSelectedClass;