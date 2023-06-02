import { getData, iData, postData } from "../utils/APIs"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

export const useTan = () => {
    const { isLoading, data } = useQuery({
        queryKey: ['data'],
        queryFn: getData
    })

    return { data, isLoading } as const
}

export const usePostTan = () => {
    const query = useQueryClient()

    const mutation = useMutation({
        mutationKey: ['data'],
        mutationFn: (val: iData) => postData(val),

        onSuccess: () => {
            query.invalidateQueries({ queryKey: ['data'], })
        }
    })

    return mutation
}