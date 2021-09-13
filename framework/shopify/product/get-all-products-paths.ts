import { ApiConfig } from "@common/types/api"
import { Product } from "@common/types/product"
import { ProductConnection } from "@framework/schema"
import getAllProductsPathsQuery from "@framework/utils/queries/get-all-producs-paths"

type ReturnType = {
  products: Pick<Product, "slug">[]
}

const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
    url: config.apiUrl,
  })

  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    }
  })

  return { products }
}

export default getAllProductsPaths

// const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
//   return {
//     products: [
//       { slug: "cool-hat" },
//       { slug: "t-shirt" },
//       { slug: "lightweight-jacket" },
//     ],
//   }
// }

// export default getAllProductspaths
