import RegularText from "@/components/RegularText"
import ExternalLink from "@/components/ExternalLink"
import Image from "@/components/Image"
import { FiTwitter } from "react-icons/fi"
import { FORM_ID } from "@/components/ContactForm"
import meAsB64 from "../constants/meAsB64"
import Link from "next/link"

function NavigationLink({ href, children = null }) {
  return (
    <a href={href} className="hover:line-through">
      {children}
    </a>
  )
}
export default function DesktopNavigation({
  className = "",
  twitterShareURL = "",
}) {
  return (
    <div className={className}>
      <div className="flex py-6 px-12 space-x-8 items-center bg-white border-b">
        <a title="It's me, click it!" href="/">
          <Image
            className="h-14 w-14 rounded-full filter saturate-200 contrast-100 hover:filter-none"
            src={meAsB64}
          />
        </a>
        <RegularText className="flex space-x-8">
          <NavigationLink href="/#">Home</NavigationLink>
          <Link href="/notes">
            <a className="hover:line-through">Notes</a>
          </Link>
          <NavigationLink href={`/#${FORM_ID}`}>Contact</NavigationLink>
        </RegularText>
        <div className="flex-grow"></div>
        <ExternalLink
          href={twitterShareURL}
          className="flex border border-dashed hover:bg-cyan hover:border-transparent focus:ring-2 ring-black py-4 rounded-full px-8 items-center space-x-2"
        >
          <RegularText className="text-base">Tweet</RegularText>
          <FiTwitter className="text-3xl" />
        </ExternalLink>
      </div>
    </div>
  )
}
