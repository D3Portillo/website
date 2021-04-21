import { useRef, useState } from "react"
import { ArrowRight, ArrowLeft } from "@/components/Icons"
import styled from "styled-components"
import { getArrowHandler, getWidth } from "./helpers"

const Left = getArrowHandler(ArrowLeft, "ml-3 left-0")
const Right = getArrowHandler(ArrowRight, "mr-3 right-0")
const ItemContainer = styled.div`
  .arrow {
    visibility: hidden;
  }
  &:hover .arrow {
    visibility: visible;
  }
`

/**
 * @param { Number } left
 * @param { ()=> HTMLDivElement } getContainer
 * @returns { ()=> void }
 */
function scrollTo(left = 0, getContainer) {
  return () => getContainer().scroll({ left })
}

export default function ItemsGallery({ children = null }) {
  const $scrollableContainer = useRef({})
  const [showArrows, setShowArrows] = useState({
    left: false,
    right: true,
  })
  const width = getWidth()
  const getContainer = () => $scrollableContainer.current
  const scrollLeft = scrollTo(-width, getContainer)
  const scrollRight = scrollTo(width, getContainer)
  function handleScroll(/** @type { UIEvent } */ e) {
    // Spacing that triggers left or right arrows to be hidden
    const gap = 200
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
      <Left onClick={scrollLeft} hidden={!showArrows.left} />
      <div
        onScroll={handleScroll}
        ref={$scrollableContainer}
        className="flex space-x-16 overflow-y-hidden overflow-x-auto"
      >
        {children}
      </div>
      <Right onClick={scrollRight} hidden={!showArrows.right} />
    </ItemContainer>
  )
}
