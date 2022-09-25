import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"
import { getCheckoutId } from "@framework/utils"

export default useAddItem

export const handler: MutationHook = {
  fetcherOptions: {
    query: `query { hello }`,
  },
  fetcher: async ({ fetch, options, input }) => {
    console.log(" getCheckoutId()", getCheckoutId())
    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1,
        },
      ],
    }

    const response = await fetch({
      ...options,
      variables,
    })
    return response
  },
  useHook: ({ fetch }: any) => {
    return async (input: any) => {
      const respons = await fetch(input)
      return {
        output: respons,
      }
    }
  },
}
