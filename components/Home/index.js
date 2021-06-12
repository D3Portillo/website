import { FORM_ID } from "@/components/ContactForm"
import Link from "@/components/Link"
import meAsBase64 from "./constants/meAsBase64"
function EagerlyLoadMe({ src = "", className = "" }) {
  return (
    <img alt="👽" width={468} height={570} src={src} className={className} />
  )
}

export default function Home() {
  return (
    <div className="flex mt-4 min-h-screen flex-col-reverse lg:flex-row">
      <div className="flex-grow flex items-end">
        <div
          tabIndex="0"
          className="group relative cursor-pointer select-none outline-none"
        >
          <EagerlyLoadMe
            className="group-hover:invisible group-focus:invisible"
            src={meAsBase64}
          />
          <EagerlyLoadMe
            src="/me/hover.webp"
            className="absolute z-10 top-0 left-0 invisible group-focus:invisible group-hover:visible"
          />
          <EagerlyLoadMe
            src="/me/out.webp"
            className="absolute z-20 top-0 left-0 invisible group-focus:visible"
          />
        </div>
      </div>
      <p className="max-w-xl pt-10 text-2xl lg:text-4xl text-right">
        👋 Hey, <i>Denny</i> here.
        <br />
        Love <u>JavaScript</u><br/> and playing around with the Web Universe.
        <br />
        <Link.Minimal target="_self" href={`#${FORM_ID}`}>
          Let's have a coffee
        </Link.Minimal>
      </p>
    </div>
  )
}
