import { FORM_ID } from "@/components/ContactForm"
import Link from "@/components/Link"

function EagerlyLoadMe({ src = "", className = "" }) {
  return (
    <img
      loading="eager"
      alt="It's me"
      width={580}
      height={580}
      style={{
        minWidth: 520,
      }}
      src={src}
      className={`max-w-lg w-full ${className}`}
    />
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row">
      <div className="flex-grow flex items-end justify-end lg:justify-start">
        <div
          tabIndex="0"
          className="group relative cursor-pointer select-none outline-none"
        >
          <EagerlyLoadMe
            className="group-hover:invisible group-focus:invisible"
            src="/me/default.webp"
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
      <p className="max-w-xl text-2xl lg:text-4xl text-right px-10 lg:p-0">
        👋 Hey, <i>Denny</i> here.
        <br />
        Love <u>JavaScript</u> and playing around with the Web Universe.
        <br />
        <Link.Minimal target="_self" href={`#${FORM_ID}`}>
          Let's have a coffee
        </Link.Minimal>
      </p>
    </div>
  )
}
