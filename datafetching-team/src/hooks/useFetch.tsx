import { useEffect, useState } from "react"
import { getData } from "../utils/APIs"

export const useFetch = () => {

    const [state, setState] = useState([] as any)

    useEffect(() => {
        getData().then((res: any) => {
            setState(res)
        })
    }, [])

    // console.log(state?.data)
    return state?.data
}