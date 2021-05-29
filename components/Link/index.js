import ExternalLink from "@/components/ExternalLink"
import { ArrowRight, ArrowUpRight } from "@/components/Icons"

function Minimal({ children = null, href, target, download, title }) {
  return (
    <ExternalLink
      title={title}
      download={download}
      target={target}
      href={href}
      className="border-yellow mb-px inline-block group font-semibold border-b-4 italic"
    >
      {children}
      <span className="ml-1">
        <ArrowRight className="inline transform group-hover:translate-x-1" />
      </span>
    </ExternalLink>
  )
}

function Readable({ children = null, href, title }) {
  let dest = children
  if (typeof children === "string") {
    if (children.includes("http")) {
      const url = new URL(children)
      dest = url.origin.replace("www.", "")
    }
  }
  return (
    <ExternalLink
      href={href}
      title={title}
      className="relative border-b-2 z-10 border-black group hover:opacity-80"
    >
      {dest}
      <ArrowUpRight className="opacity-20 inline group-hover:opacity-100" />
    </ExternalLink>
  )
}

function Link({ children = null, href, target, download, title, ...rest }) {
  return (
    <ExternalLink
      title={title}
      download={download}
      target={target}
      href={href}
      className="px-2 inline-block group italic py-2 font-bold bg-yellow"
      {...rest}
    >
      {children}
      <ArrowUpRight className="inline text-2xl lg:text-4xl ml-3 transform group-hover:translate-x-px group-hover:-translate-y-px" />
    </ExternalLink>
  )
}

/** @type { Minimal } */
Link.Minimal = Minimal

/** @type { Readable } */
Link.Readable = Readable

export default Link
