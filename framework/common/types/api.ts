import { ApiHooks } from "./hooks"

export type ApiFetcherOptions = {
  query: string
  variables?: Variables
}

export type Variables = { [key: string]: string | any | undefined }

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  fetch<T>(options: ApiFetcherOptions): Promise<ApiFetcherResults<T>>
}

export type ApiFeatcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFeatcher
}
