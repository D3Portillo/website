import { useState, useRef, useMemo, useCallback } from "react"
import { MdDragHandle } from "react-icons/md"

function getPosForEvent(e) {
  e.preventDefault()
  e.stopPropagation()
  const { clientX } = e.touches ? e.touches[0] : e
  const { offsetLeft } = e.currentTarget
  return clientX - offsetLeft
}

export default function Slider({
  defaultValue = 0,
  min = 0,
  max = 100,
  onChange = () => null,
}) {
  const $handle = useRef({})
  const [sliderOn, setSliderOn] = useState(false)
  const [percentage, setPercentage] = useState(() => {
    return (defaultValue / max) * 100
  })
  const stopSlider = () => setSliderOn(false)
  const startSlider = () => setSliderOn(true)

  const getMaxMinDifference = useCallback(() => {
    return max - min
  }, [max, min])

  const onDirectSelection = useCallback(
    (e) => {
      const { currentTarget } = e
      const { clientWidth } = currentTarget
      const handlerW = $handle.current.clientWidth
      const handlerMultip = window.innerWidth < 800 ? 0.65 : 1.25
      const pos = getPosForEvent(e) - handlerW * handlerMultip
      const multiplier = pos / clientWidth
      const gap = getMaxMinDifference()
      setPercentage(multiplier * 100)
      onChange(Math.round(min + multiplier * gap))
      stopSlider()
    },
    [setPercentage]
  )

  const handleMouseMove = useCallback(
    (e) => {
      const pos = getPosForEvent(e)
      const { currentTarget } = e
      const { clientWidth } = currentTarget
      let multiplier = pos / clientWidth
      const gap = getMaxMinDifference()
      if (sliderOn) {
        if (multiplier < 0 || multiplier > 1) {
          // Multiplier not in range
          if (multiplier < 0.5) {
            // Multiplier is more on the left side
            multiplier = 0
          } else {
            multiplier = 1
          }
        }
        setPercentage(multiplier * 100)
        onChange(Math.round(min + multiplier * gap))
      }
    },
    [sliderOn, setPercentage, getMaxMinDifference]
  )

  return (
    <div
      tabIndex="10"
      onBlur={stopSlider}
      onMouseLeave={stopSlider}
      onTouchStart={startSlider}
      onTouchEnd={stopSlider}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      className="relative outline-none w-full flex items-center h-24 select-none"
    >
      <div
        onMouseDown={onDirectSelection}
        className="w-full bg-black h-1 cursor-pointer"
      />
      <div
        onMouseDown={onDirectSelection}
        className="absolute w-full xl:hidden h-full"
      />
      <div
        title="Yes, you can move this"
        ref={$handle}
        onTouchStart={startSlider}
        onTouchEnd={stopSlider}
        onMouseDown={startSlider}
        onMouseUp={stopSlider}
        style={{
          transform: "translateX(-50%)",
          marginLeft: `${percentage}%`,
        }}
        className="absolute w-16 h-16 bg-black hover:shadow-md cursor-move rounded-full flex items-center justify-center"
      >
        <MdDragHandle className="text-white pointer-events-none text-4xl transform rotate-90" />
      </div>
    </div>
  )
}
