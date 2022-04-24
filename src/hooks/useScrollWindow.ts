import { useEffect, useState } from "react";

export function useScrollWindow () {
    const [isTop, setIsTop] = useState(true)

    useEffect(()=>{
        window.onscroll = (e) => {
            if(isTop && window.scrollY !== 0) setIsTop(false)
            else if (!isTop && window.scrollY === 0) setIsTop(true)
        }
    })

    return {
        isTop,
        scroll: window.screenY
    }
}