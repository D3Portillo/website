import { FORM_ID } from "@/components/ContactForm"
import Link from "@/components/Link"
const minWidth = 520

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row">
      <div className="flex-grow flex items-end justify-end lg:justify-start">
        <div
          tabIndex="0"
          className="group cursor-pointer select-none outline-none"
        >
          <img
            alt="It's me"
            style={{
              minWidth,
            }}
            src="/me/hover.png"
            className="w-full max-w-lg hidden group-focus:hidden group-hover:block"
          />
          <img
            alt="It's me"
            style={{ minWidth }}
            src="/me/default.png"
            className="w-full max-w-lg group-hover:hidden group-focus:hidden"
          />
          <img
            alt="It's me"
            style={{ minWidth }}
            src="/me/out.png"
            className="w-full max-w-lg hidden group-focus:block"
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
