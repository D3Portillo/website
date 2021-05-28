import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri"
import { GrTwitter } from "react-icons/gr"
import FullWidthContainer from "@/components/FullWidthContainer"
import ExternalLink from "@/components/ExternalLink"
import Link from "@/components/Link"

export default function Footer() {
  return (
    <FullWidthContainer>
      <footer className="bg-black text-xl px-8 pb-10 lg:px-20 pt-36 text-white flex flex-wrap-reverse">
        <div className="flex-grow flex flex-col justify-end w-full lg:w-auto">
          <div className="flex space-x-2 items-end">
            <ExternalLink
              title="Denny's Twitter"
              className="transform hover:scale-105"
              href="https://twitter.com/d3portillo"
            >
              <GrTwitter className="text-white text-2xl" />
            </ExternalLink>
            <ExternalLink
              title="My Instagram"
              className="transform hover:scale-105"
              href="https://instagram.com/d3portillo.me"
            >
              <RiInstagramFill className="text-white text-2xl" />
            </ExternalLink>
            <ExternalLink
              title="TheFacebook"
              className="transform hover:scale-105"
              href="https://linkedin.com/in/d3portillo"
            >
              <RiLinkedinFill className="text-white text-3xl" />
            </ExternalLink>
          </div>
          <div className="mt-2">
            <ExternalLink
              className="hover:line-through"
              href="/#"
              title="Homepage"
              target="_self"
            >
              Denny Portillo
            </ExternalLink>
            ・2021
          </div>
        </div>
        <div className="flex w-full lg:w-auto flex-col lg:items-end mb-6 pb-12 lg:mb-0 lg:pb-0 border-b lg:border-none">
          <strong className="mb-2">
            MORE LINKS{" "}
            <span
              className="hidden lg:inline"
              role="image"
              aria-label="point down sign"
            >
              👇
            </span>
          </strong>
          <Link.Readable href="/notes" title="A 'Blog' of Web things">
            My Notes
          </Link.Readable>
          <Link.Readable
            href="https://nodeschoolsm.io"
            title="Dev Community at El Salvador"
          >
            NodeschoolSM
          </Link.Readable>
          <Link.Readable
            href="https://reactconf.dev"
            title="React related conf. running in Chile"
          >
            ReactconfCL
          </Link.Readable>
        </div>
      </footer>
    </FullWidthContainer>
  )
}
