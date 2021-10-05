import { FC } from "react"
import s from "./Swatch.module.css"

interface Props {
  color?: string
  label?: string
  variant?: "size" | "color" | string
  onClick: () => void
}

const Swatch: FC<Props> = ({ color, label, variant, ...rest }) => {
  console.log(label, "lab")
  label = label?.toLowerCase()
  variant = variant?.toLowerCase()

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={s.root}
      {...rest}
    >
      {variant === "size" ? label : null}
    </button>
  )
}

export default Swatch
