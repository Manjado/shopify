import { ReactNode } from "react"
import { getConfig } from "./api/config"
import {
  ApiProvider as CoreApiProvider,
  useApiProvider as useCoreApiProvider,
} from "@common"

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[]
}

const config = getConfig()

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config, testKey: "123" }}>
      {children}
    </CoreApiProvider>
  )
}

export const useApiProvider = () => useCoreApiProvider()
