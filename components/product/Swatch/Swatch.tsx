import { FC } from "react"
import s from "./Swatch.module.css"
import cn from "classnames"
import { Check } from "@components/icons"

interface Props {
  color?: string
  label?: string
  active?: boolean
  variant?: "size" | "color" | string
  onClick: () => void
}

const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  console.log(label, "lab")
  label = label?.toLowerCase()
  variant = variant?.toLowerCase()

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
  })

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === "size" ? label : null}
    </button>
  )
}

export default Swatch
