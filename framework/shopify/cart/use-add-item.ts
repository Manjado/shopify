import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem

export const handler: MutationHook = {
  fetcher: ({ fetch, input }) => {
    const response = fetch({
      url: "",
      query: "",
    })
    return response
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const respons = fetch(input)
      return {
        output: respons,
      }
    }
  },
}
