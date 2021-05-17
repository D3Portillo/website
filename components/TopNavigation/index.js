import RegularText from "@/components/RegularText"
import ExternalLink from "@/components/ExternalLink"
import Image from "@/components/Image"
import { FiTwitter } from "react-icons/fi"
import { FORM_ID } from "@/components/ContactForm"
import { useRouter } from "next/router"
import getDomain from "@/helpers/getDomain"
import meAsB64 from "./constants/meAsB64"
import { RiCloseFill, RiTwitterFill } from "react-icons/ri"
import PageSeparator from "../PageSeparator"
import Link from "../Link"
import { useState } from "react"

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

const DesktopNavigation = ({ className = "" }) => {
  const shareURL = useTwitterURL()
  return (
    <div className={className}>
      <div className="flex py-6 px-12 -mx-20 space-x-8 items-center bg-white border-b">
        <a title="It's me, click it!" href="/">
          <Image
            className="h-14 w-14 rounded-full filter saturate-200 contrast-100 hover:filter-none"
            src={meAsB64}
          />
        </a>
        <RegularText className="flex space-x-6">
          <NavigationLink href="/#">Home</NavigationLink>
          <NavigationLink href="/notes">Notes</NavigationLink>
          <NavigationLink href={`/#${FORM_ID}`}>Contact</NavigationLink>
        </RegularText>
        <div className="flex-grow"></div>
        <ExternalLink
          href={shareURL}
          className="flex hover:bg-cyan focus:ring-2 ring-black py-4 rounded-full px-8 items-center space-x-2"
        >
          <RegularText className="text-base">Tweet</RegularText>
          <FiTwitter className="text-3xl" />
        </ExternalLink>
      </div>
      <div className="h-12" />
    </div>
  )
}

export default function TopNavigation() {
  return (
    <>
      <DesktopNavigation className="hidden lg:block" />
      <MobileNavigation className="lg:hidden" />
    </>
  )
}

function MobileNavigation({ className = "" }) {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className={className}>
      <div className="flex border-b -mx-10 px-5 py-4 justify-between">
        <div
          onClick={() => setShowNav(true)}
          className="flex flex-col w-6 space-y-1 justify-center"
        >
          <div className="h-1 w-full bg-black"></div>
          <div style={{ width: "80%" }} className="h-1 bg-black"></div>
          <div className="h-1 w-full bg-black"></div>
        </div>
        <div className="flex items-center space-x-2">
          <b className="text-lg">Tweet</b>
          <RiTwitterFill className="text-2xl" />
        </div>
      </div>
      <div className="h-12" />
      <div
        hidden={!showNav}
        className="fixed bg-white z-20 h-screen inset-0 flex flex-col"
      >
        <div className="flex">
          <div
            onClick={() => setShowNav(false)}
            className="w-16 h-16 bg-black flex items-center justify-center"
          >
            <RiCloseFill className="text-4xl text-white" />
          </div>
        </div>
        <div className="flex mt-20 overflow-auto py-8 flex-col items-center space-y-10">
          <a href="/" className="text-2xl">
            Home
          </a>
          <a href="/notes" className="text-2xl">
            Notes
          </a>
          <ExternalLink
            href="https://twitter.com/d3portillo"
            className="text-2xl"
          >
            Twitter
          </ExternalLink>
          <a href="/goodies" className="text-2xl">
            Goodies
          </a>
        </div>
        <div onClick={() => setShowNav(false)} className="flex-grow" />
      </div>
    </div>
  )
}
