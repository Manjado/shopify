import { useHooks } from "@common/utils/use-hooks"

const useAddItem = () => {
  const hook = useHooks((hooks) => {
    return hooks.cart.useAddItem
  })

  return hook.useHook()
}

export default useAddItem
