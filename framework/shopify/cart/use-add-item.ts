import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"
import { getCheckoutId } from "@framework/utils"
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"

export default useAddItem

export const handler: MutationHook = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation,
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
