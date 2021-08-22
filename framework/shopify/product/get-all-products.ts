import getAllProductsQuery from "../utils/queries/get-all-products"
import fetchApi from "../utils/fetch-api"
import { ProductConnection } from "../schema"

type ReturnData = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnData>({
    query: getAllProductsQuery,
  })

  const products = data.products.edges.map(({ node: product }) => product) ?? []
  return products
}

export default getAllProducts
