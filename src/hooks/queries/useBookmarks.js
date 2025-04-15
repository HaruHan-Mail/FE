import { useQuery } from "@tanstack/react-query"
import { fetchAllBookmarkContents } from "../../apis/userBookmarkApi"

export const useBookmarks = (email, token) => {
    return useQuery({
        queryKey: ['bookmark', email], 
        queryFn: async () => {
            const result = await fetchAllBookmarkContents({ email, token });
            if ( result.stateCode !== 200) {
                throw new Error(result.message);
            }
            return result.data;
        },
        enabled: !!(email && token),
        staleTime: 2000,
    })
}