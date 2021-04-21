import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri"
import { GrTwitter } from "react-icons/gr"
import ExternalLink from "@/components/ExternalLink"

function LinkTo({ children = null, href, title }) {
  return (
    <ExternalLink
      title={title}
      className="italic hover:line-through transform hover:-skew-y-1"
      href={href}
    >
      {children}
    </ExternalLink>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black -mx-10 text-xl p-20 pt-32 text-white flex">
      <div className="flex-grow flex flex-col justify-end">
        <div className="flex space-x-2 items-center">
          <ExternalLink
            title="My Twitter"
            className="transform hover:scale-105"
            href="https://twitter.com/d3portillo"
          >
            <GrTwitter className="text-white text-2xl" />
          </ExternalLink>
          <ExternalLink
            title="My PosserGram"
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
      <div className="flex flex-col">
        <LinkTo href="/notes" title="A 'Blog' of Web things">
          My Notes
        </LinkTo>
        <LinkTo href="https://nodeschoolsm.io" title="Dev Community">
          NodeschoolSM
        </LinkTo>
        <LinkTo href="https://reactconf.dev" title="React related web conf.">
          ReactConfCL
        </LinkTo>
      </div>
    </footer>
  )
}
