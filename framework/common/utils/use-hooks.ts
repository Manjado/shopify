import { useApiProvider } from "@common"
import { ApiFeatcher } from "@common/types/api"
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

const useData = (hook: any, fetcher: ApiFeatcher) => {
  const [data, setData] = useState(null)

  const hookFetcher = async () => {
    try {
      return await hook.fetcher({
        fetch: fetcher,
        options: hook.fetchOptions,
      })
    } catch (error) {
      throw error
    }
  }

  if (!data) {
    hookFetcher().then((data) => {
      setData(data)
    })
  }

  return data
}

// TO DO cache data first if possible
export const useSWRHook = (hook: any) => {
  const { fetcher } = useApiProvider()

  return hook.useHook({
    useData() {
      const data = useData(hook, fetcher)

      return data
    },
  })
}
