import { ApiHooks } from "@common/types/api"
import { useHooks } from "@common/utils/use-hooks"

const useCart = () => {
  const hook = useHooks((hooks: ApiHooks) => hooks.cart.useCart)

  return hook.useHook({
    fetch: hook.fetcher,
  })
}

export default useCart
