import { useQuery } from '@tanstack/react-query';


const useSelectedClass = () => {
    const { data: selectedClasses = [], refetch } = useQuery(['selectedClass'], async () => {
        const res = await fetch('http://localhost:5000/selectedClass')
        return res.json();
    })
    return [selectedClasses, refetch];
};

export default useSelectedClass;