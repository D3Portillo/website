import React from "react"
import { FiTwitter } from "react-icons/fi"
import ExternalLink from "@/components/shared/ExternalLink"
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
    <div className="flex select-none -mx-10 -mt-10 space-x-8 items-center px-20 py-10">
      <a title="It's me, click it!" href="/">
        <img
          className="h-16 filter saturate-200 contrast-100 hover:filter-none"
          src="/home.png"
          alt=""
        />
      </a>
      <div className="flex space-x-6 text-xl">
        <NavigationLink href="/#">Home</NavigationLink>
        <NavigationLink href="/notes">Notes</NavigationLink>
        <NavigationLink href={`/#${FORM_ID}`}>Contact</NavigationLink>
      </div>
      <div className="flex-grow"></div>
      <ExternalLink
        href={shareURL}
        className="flex hover:bg-cyan focus:ring-2 ring-black py-4 rounded-full px-6 items-center space-x-2"
      >
        <div className="text-xl">Tweet it</div>
        <FiTwitter className="text-3xl" />
      </ExternalLink>
    </div>
  )
})
