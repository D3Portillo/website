import { useRouter } from "next/router"
import getDomain from "@/helpers/getDomain"
import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"
import FullWidthContainer from "@/components/FullWidthContainer"

function useTwitterURL() {
  const { asPath } = useRouter()
  const siteBase = getDomain()
  const fullPath = `${siteBase}${asPath}`
  const twitterBase = "https://twitter.com/intent/tweet"
  return `${twitterBase}?text=Check%20this%20out!&url=${fullPath}&via=d3portillo`
}

export default function TopNavigation() {
  const twitterShareURL = useTwitterURL()
  return (
    <FullWidthContainer>
      <DesktopNavigation
        twitterShareURL={twitterShareURL}
        className="hidden lg:block"
      />
      <MobileNavigation
        twitterShareURL={twitterShareURL}
        className="lg:hidden"
      />
      <div className="h-12" />
    </FullWidthContainer>
  )
}
