import { handler } from "@framework/cart/use-add-item"

const useAddItem = () => {
  console.log("handler", handler)
  return handler.useHook()
}

export default useAddItem
