import { createContext, FC, useContext, useReducer, useMemo } from "react"

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
type Action = { type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR" }

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      console.log("action open", state)
      return {
        ...state,
        isSidebarOpen: true,
      }
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: false,
      }
    }
  }
}

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openSidebar = () => {
    console.log("open")
    dispatch({ type: "OPEN_SIDEBAR" })
  }
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" })

  const value = useMemo(() => {
    return {
      ...state,
      openSidebar,
      closeSidebar,
    }
  }, [state])

  console.log("state, value", value)

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export const useUI = () => {
  const context = useContext(UIContext)
  return context
}
