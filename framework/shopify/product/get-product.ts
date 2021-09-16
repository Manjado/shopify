import { ApiConfig } from "@common/types/api"
import { getProductQuery } from "@framework/utils"

const getPorduct = async (options: {
  config: ApiConfig
  variables: any
}): Promise<any> => {
  const { config, variables } = options
  const { data } = await config.fetch<any>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  })

  console.log(JSON.stringify(data, null, 2))
  return {
    product: {
      name: "My super product",
      slug: "my-super-product",
    },
  }
}

export default getPorduct
