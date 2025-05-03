import { useQuery } from "@tanstack/react-query"
import { fetchAllFeedback } from "../../apis/adminApi"

export const useFeedbacks = () => {
    return useQuery({
        queryKey: ['feedback'], 
        queryFn: () => fetchAllFeedback(),
        select: (data) => data.data,
        staleTime: 2000,
    })
}