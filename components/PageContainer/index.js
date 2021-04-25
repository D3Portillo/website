import TopNavigation from "@/components/TopNavigation"
import { useMemo } from "react"

export default function PageContainer({
  children = null,
  withNavigation = false,
  isFull = false,
}) {
  const Navigation = useMemo(() => {
    return withNavigation ? TopNavigation : () => null
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
      <div className={className}>{children}</div>
    </>
  )
}
