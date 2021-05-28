import ExternalLink from "@/components/ExternalLink"
import { RiCloseFill, RiTwitterFill } from "react-icons/ri"
import { useState } from "react"
import styled, { keyframes } from "styled-components"

export default function MobileNavigation({
  className = "",
  twitterShareURL = "",
}) {
  const [showNav, setShowNav] = useState(false)
  const closeNav = () => setShowNav(false)
  return (
    <div className={className}>
      <div className="flex border-b pr-5 justify-between">
        <div onClick={() => setShowNav(true)} className="p-5">
          <div className="flex flex-col w-6 space-y-1 justify-center">
            <div className="h-1 w-full bg-black" />
            <div style={{ width: "76%" }} className="h-1 bg-black" />
            <div className="h-1 w-full bg-black" />
          </div>
        </div>
        <ExternalLink
          href={twitterShareURL}
          className="flex items-center space-x-1"
        >
          <b className="text-lg">Tweet</b>
          <RiTwitterFill className="text-3xl" />
        </ExternalLink>
      </div>
      {showNav && <Menu onClose={closeNav} />}
    </div>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`
const StyledMenu = styled.div`
  animation: ${fadeIn} 80ms ease-in;
`

function Menu({ onClose }) {
  return (
    <StyledMenu className="fixed bg-white z-20 h-screen inset-0 flex flex-col">
      <div className="flex">
        <div
          onClick={onClose}
          className="w-16 h-16 bg-black flex items-center justify-center"
        >
          <RiCloseFill className="text-4xl text-white" />
        </div>
      </div>
      <div className="flex mt-20 overflow-auto py-8 flex-col items-center space-y-3">
        <a href="/" className="text-2xl p-4">
          Home
        </a>
        <a href="/notes" className="text-2xl p-4">
          Notes
        </a>
        <ExternalLink
          href="https://twitter.com/d3portillo"
          className="text-2xl p-4"
        >
          Twitter
        </ExternalLink>
        <a href="/goodies" className="text-2xl p-4">
          Goodies
        </a>
      </div>
    </StyledMenu>
  )
}
