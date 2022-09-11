import { useHooks, useMutauionHook } from "@common/utils/use-hooks"

const useAddItem = () => {
  const hook = useHooks((hooks) => {
    return hooks.cart.useAddItem
  })

  return useMutauionHook({ ...hook })
}

export default useAddItem
