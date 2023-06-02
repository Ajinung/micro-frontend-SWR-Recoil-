import { getData } from "../utils/APIs"
import useSWR from "swr"

export const useFetchSWR = () => {
    const { isLoading, data, mutate } = useSWR(
        'data', getData
    )

    return { data, isLoading, mutate } as const
}