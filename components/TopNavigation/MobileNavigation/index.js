import ExternalLink from "@/components/ExternalLink"
import { RiCloseFill, RiTwitterFill } from "react-icons/ri"
import { useState } from "react"

export default function MobileNavigation({
  className = "",
  twitterShareURL = "",
}) {
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
        <ExternalLink
          href={twitterShareURL}
          className="flex items-center space-x-2"
        >
          <b className="text-lg">Tweet</b>
          <RiTwitterFill className="text-2xl" />
        </ExternalLink>
      </div>
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
