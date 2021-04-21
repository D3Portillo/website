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
  const className = isFull ? "-mx-10" : "px-10"
  return (
    <>
      <Navigation />
      <div className={className}>{children}</div>
    </>
  )
}
