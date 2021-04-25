import React from "react"
import RegularText from "@/components/RegularText"
import ExternalLink from "@/components/ExternalLink"
import Image from "@/components/Image"
import { FiTwitter } from "react-icons/fi"
import { FORM_ID } from "@/components/ContactForm"
import { useRouter } from "next/router"

function NavigationLink({ href, children = null }) {
  return (
    <a href={href} className="hover:line-through">
      {children}
    </a>
  )
}

function useTwitterURL() {
  const { asPath } = useRouter()
  const siteBase = "https://d3portillo.me"
  const fullPath = `${siteBase}${asPath}`
  const twitterBase = "https://twitter.com/intent/tweet"
  return `${twitterBase}?text=Check%20this%20out!&url=${fullPath}&via=d3portillo`
}

export default React.memo(function TopNavigation() {
  const shareURL = useTwitterURL()
  return (
    <div className="flex select-none -mx-10 -mt-10 space-x-8 items-center px-20 py-6 bg-white border-b mb-10 relative">
      <a title="It's me, click it!" href="/">
        <Image
          className="h-14 w-14 lg:h-16 lg:w-16 rounded-full lg:rounded object-cover filter saturate-200 contrast-100 hover:filter-none"
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
        className="flex bg-cyan font-semibold lg:font-normal lg:bg-transparent hover:bg-cyan focus:ring-2 ring-black py-4 rounded-full px-8 items-center space-x-2"
      >
        <RegularText className="text-base">Tweet</RegularText>
        <FiTwitter className="text-2xl lg:text-3xl" />
      </ExternalLink>
    </div>
  )
})
