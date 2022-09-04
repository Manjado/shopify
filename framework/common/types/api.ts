export type ApiFetcherOptions = {
  url: string
  query: string
  variables?: Variables
}

export type Variables = { [key: string]: string | undefined }

export type ApiFetcherResults<T> = {
  data: T
}

export interface ApiConfig {
  apiUrl: string
  fetch: ApiFeatcher
}

export interface ApiHooks {
  cart: {
    useAddItem: any
  }
}

export type ApiFeatcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>

export interface ApiProviderContext {
  hooks: ApiHooks
  fetcher: ApiFeatcher
}
