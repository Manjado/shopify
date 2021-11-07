const useAddItem = () => {
  return (input: any) => {
    return {
      output: input + "_MODIFIED",
    }
  }
}

export default useAddItem
