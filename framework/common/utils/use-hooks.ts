import { useApiProvider } from "@common"
import { ApiHooks } from "@common/types/api"
import { MutationHook } from "@common/types/hooks"

export const useHooks = (fn: (apiHooks: ApiHooks) => MutationHook) => {
  const { hooks } = useApiProvider()
  return fn(hooks)
}

export const useMutauionHook = (hook: MutationHook) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    fetch: (input: any) => {
      return hook.fetcher({
        input,
        fetch: fetcher,
      })
    },
  })
}
