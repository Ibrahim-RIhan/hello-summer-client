import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Hello Summer | ${title}`
    },[title])
}

export default useTitle;