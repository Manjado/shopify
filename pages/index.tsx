import type { InferGetStaticPropsType } from "next"
import getAllProducts from "../framework/shopify/product/get-all-products"

export async function getStaticProps() {
  const products = await getAllProducts()
  console.log("TETST")
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const message: string = "Hello World"

  return <div>{JSON.stringify(products)}</div>
}
