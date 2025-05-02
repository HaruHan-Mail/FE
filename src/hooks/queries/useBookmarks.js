import { useQuery } from "@tanstack/react-query"
import { fetchAllBookmarkContents } from "../../apis/userBookmarkApi"

export const useBookmarks = (email, token) => {
    return useQuery({
        queryKey: ['bookmark', email], 
        queryFn: () => fetchAllBookmarkContents({email, token}),
        select: (data) => data.data,
        enabled: !!(email && token),
        staleTime: 2000,
    })
}