import TopNavigation from "@/components/TopNavigation"
import NullComponent from "@/components/NullComponent"
import { useMemo } from "react"

export default function PageContainer({
  children = null,
  withNavigation = false,
  isFull = false,
  hidden = false,
}) {
  const Navigation = useMemo(() => {
    return withNavigation ? TopNavigation : NullComponent
  }, [withNavigation])

  const className = useMemo(() => {
    const FULL_WIDTH = "lg:-mx-10"
    if (isFull && withNavigation) {
      return `${FULL_WIDTH} -mt-10`
    }
    return isFull ? FULL_WIDTH : "px-10"
  }, [isFull, withNavigation])

  return (
    <>
      <Navigation />
      <div hidden={hidden} className={className}>
        {children}
      </div>
    </>
  )
}
