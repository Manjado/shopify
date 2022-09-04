import { useApiProvider } from "@common"
import { ApiHooks } from "@common/types/api"

export const useHooks = (fn: (apiHooks: ApiHooks) => any) => {
  const { hooks } = useApiProvider()
  return fn(hooks)
}
