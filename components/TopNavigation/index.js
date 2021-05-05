import RegularText from "@/components/RegularText"
import ExternalLink from "@/components/ExternalLink"
import Image from "@/components/Image"
import { FiTwitter } from "react-icons/fi"
import { FORM_ID } from "@/components/ContactForm"
import { useRouter } from "next/router"
import getDomain from "@/services/getDomain"

function NavigationLink({ href, children = null }) {
  return (
    <a href={href} className="hover:line-through">
      {children}
    </a>
  )
}

function useTwitterURL() {
  const { asPath } = useRouter()
  const siteBase = getDomain()
  const fullPath = `${siteBase}${asPath}`
  const twitterBase = "https://twitter.com/intent/tweet"
  return `${twitterBase}?text=Check%20this%20out!&url=${fullPath}&via=d3portillo`
}

export default function TopNavigation() {
  const shareURL = useTwitterURL()
  return (
    <>
      <div className="flex px-20 py-6 -mx-10 -mt-10 space-x-8 items-center bg-white border-b">
        <a title="It's me, click it!" href="/">
          <Image
            className="h-16 w-16 lg:h-14 lg:w-14 rounded-full filter saturate-200 contrast-100 hover:filter-none"
            src="/home.png"
          />
        </a>
        <RegularText className="hidden lg:flex space-x-6">
          <NavigationLink href="/#">Home</NavigationLink>
          <NavigationLink href="/notes">Notes</NavigationLink>
          <NavigationLink href={`/#${FORM_ID}`}>Contact</NavigationLink>
        </RegularText>
        <div className="flex-grow"></div>
        <ExternalLink
          href={shareURL}
          className="flex bg-cyan font-semibold lg:font-normal lg:bg-transparent hover:bg-cyan focus:ring-2 ring-black py-4 rounded-full px-10 lg:px-8 items-center space-x-2"
        >
          <RegularText className="text-base">Tweet</RegularText>
          <FiTwitter className="text-2xl lg:text-3xl" />
        </ExternalLink>
      </div>
      <div className="h-12" />
    </>
  )
}
