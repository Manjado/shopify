import { useApiProvider } from "@common"
import { ApiHooks } from "@common/types/hooks"
import { MutationHook } from "@common/types/hooks"
import { useState } from "react"

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
        options: hook.fetcherOptions,
      })
    },
  })
}

const useData = () => {
  const [data, setData] = useState(null)

  if (!data) {
    setData({ data: "Cart Ready!" } as any)
  }

  return data
}

// TO DO cache data first if possible
export const useSWRHook = (hook: any) => {
  return hook.useHook({
    useData() {
      const data = useData()

      return data
    },
  })
}
