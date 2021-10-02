import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import s from "./Button.module.css"

// interface Props {
//   children: ReactNode | ReactNode[]
//   onClick: () => void
// }

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={s.root} type="button" onClick={onClick}>
      {children}
    </button>
  )
}
