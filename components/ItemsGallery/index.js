import { useRef, useState } from "react"
import { ArrowRight, ArrowLeft } from "@/components/Icons"
import { screens } from "tailwindcss/defaultTheme"
import styled from "styled-components"
import getArrowHandler from "./helpers/getArrowHandler"
const Left = getArrowHandler(ArrowLeft, "transform left-0", {
  transform: "translateX(-50%)",
})
const Right = getArrowHandler(ArrowRight, "transform right-0", {
  transform: "translateX(50%)",
})
const ItemContainer = styled.div`
  &:hover .arrow {
    visibility: visible;
  }
  @media (min-width: ${screens.lg}) {
    .arrow {
      visibility: hidden;
    }
  }
`

/**
 * @param { ()=> HTMLDivElement } getContainer
 * @param { (Number) => Number } amountHandler
 * @returns { ()=> void }
 */
function scrollTo(getContainer, amountHandler = (n) => n) {
  return () => {
    const container = getContainer()
    const { clientWidth } = container
    const amount = clientWidth < 600 ? clientWidth : clientWidth * 0.55
    container.scrollBy({ left: amountHandler(amount) })
  }
}

export default function ItemsGallery({ children = null }) {
  const $scrollableContainer = useRef({})
  const [showArrows, setShowArrows] = useState({
    left: false,
    right: true,
  })
  const getContainer = () => $scrollableContainer.current
  const scrollLeftHandler = scrollTo(getContainer, (amount) => -amount)
  const scrollRightHandler = scrollTo(getContainer)
  function handleScroll(/** @type { UIEvent } */ e) {
    // Spacing that triggers left or right arrows to be hidden
    const gap = 50
    let newShowArrows = { left: false, right: false }
    const { scrollWidth, scrollLeft, clientWidth } = e.currentTarget
    const maxScroll = scrollWidth - clientWidth
    if (scrollLeft > gap) {
      newShowArrows.left = true
    }
    if (scrollLeft + gap < maxScroll) {
      newShowArrows.right = true
    }
    const leftIsSame = newShowArrows.left === showArrows.left
    const rightIsSame = newShowArrows.right === showArrows.right
    if (leftIsSame && rightIsSame) return null
    setShowArrows(newShowArrows)
  }

  return (
    <ItemContainer className="w-full relative flex items-center">
      <Left onClick={scrollLeftHandler} hidden={!showArrows.left} />
      <div
        onScroll={handleScroll}
        ref={$scrollableContainer}
        className="flex space-x-10 overflow-y-hidden overflow-x-auto"
      >
        {children}
      </div>
      <Right onClick={scrollRightHandler} hidden={!showArrows.right} />
    </ItemContainer>
  )
}
