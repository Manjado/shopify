import React, { FC, Children, isValidElement } from "react"
import s from "./ProductSLider.module.css"
import { useKeenSlider } from "keen-slider/react"

const ProductSlider: FC = ({ children }) => {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      console.log("changing to slide: ", s.details().relativeSlide)
    },
  })

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as any}
        className="keen-slider h-full transition-opacity"
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            // return React.cloneElement(child, {
            //   className: "kenn-slider__slider",
            // })

            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? child.props.className : ""
                } keen-slider__slide`,
              },
            }
          }
          return child
        })}
      </div>
    </div>
  )
}
export default ProductSlider
