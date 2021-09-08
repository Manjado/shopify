import { createContext, FC, useContext, useState } from "react"

export interface StateModifires {
  openSidebar: () => void
  closeSidebar: () => void
}

export interface StateValues {
  isSidebarOpen: boolean
}

const stateModifires = {
  openSidebar: () => {},
  closeSidebar: () => {},
}

const initialState = {
  isSidebarOpen: false,
}

type State = StateValues & StateModifires

const UIContext = createContext<State>({
  ...stateModifires,
  ...initialState,
})

export const UIProvider: FC = ({ children }) => {
  const openSidebar = () => alert("opening sidebar")
  const closeSidebar = () => alert("Closing sidebar")

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}
