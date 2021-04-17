import ExternalLink from "@/components/shared/ExternalLink"
import { ArrowRight } from "@/components/shared/Icons"
import { FiArrowUpRight } from "react-icons/fi"

function Minimal({ children = null, href, target, download, title }) {
  return (
    <ExternalLink
      title={title}
      download={download}
      target={target}
      href={href}
      className="border-yellow group font-semibold border-b-4 italic"
    >
      {children}
      <span className="ml-1">
        <ArrowRight className="inline transform group-hover:translate-x-1" />
      </span>
    </ExternalLink>
  )
}

function Link({ children = null, href, target, download, title }) {
  return (
    <ExternalLink
      title={title}
      download={download}
      target={target}
      href={href}
      className="px-2 group italic py-2 font-bold bg-yellow"
    >
      {children}
      <FiArrowUpRight className="inline ml-3 transform group-hover:translate-x-px group-hover:-translate-y-px" />
    </ExternalLink>
  )
}

/** @type { Minimal } */
Link.Minimal = Minimal

export default Link
