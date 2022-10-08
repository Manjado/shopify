import { ApiHooks } from "@common/types/hooks"
import { useHooks, useSWRHook } from "@common/utils/use-hooks"

const useCart = () => {
  const hook = useHooks((hooks: ApiHooks) => hooks.cart.useCart)

  return useSWRHook({ ...hook })
}

export default useCart
