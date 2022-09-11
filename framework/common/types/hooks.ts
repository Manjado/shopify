import { ApiFeatcher } from "./api"

export type MutationHookContext = {
  fetch: (input: any) => any
}

export type FetcherHookContext = {
  input: any
  fetch: ApiFeatcher
}

export type MutationHook = {
  fetcher: (context: FetcherHookContext) => any
  useHook(context: MutationHookContext): (input: any) => any
}
