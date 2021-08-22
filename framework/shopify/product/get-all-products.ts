import fetchApi from "../utils/fetch-api"
import getAllProductsQuery from "../utils/queries/get-all-products"
import { normalizeProduct } from "../utils/normalize"
import { ProductConnection } from "../schema"
import { Product } from "../../common/types/product"

type ReturnData = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnData>({
    query: getAllProductsQuery,
  })

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    []

  return products
}

export default getAllProducts
