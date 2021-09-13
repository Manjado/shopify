import { ApiConfig } from "@common/types/api"

const getPorduct = async (config: ApiConfig): Promise<any> => {
  return {
    product: {
      name: "My super product",
      slug: "my-super-product",
    },
  }
}

export default getPorduct
