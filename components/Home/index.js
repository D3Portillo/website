import { FORM_ID } from "@/components/ContactForm"
import Link from "@/components/shared/Link"
const minWidth = 580

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-grow flex items-end">
        <div tabIndex="0" className="group cursor-pointer select-none outline-none">
          <img
            style={{
              minWidth,
            }}
            src="/me/hover.png"
            className="w-full max-w-lg hidden group-focus:hidden group-hover:block"
          />
          <img
            style={{ minWidth }}
            src="/me/default.png"
            className="w-full max-w-lg group-hover:hidden group-focus:hidden"
          />
          <img
            style={{ minWidth }}
            src="/me/out.png"
            className="w-full max-w-lg hidden group-focus:block"
          />
        </div>
      </div>
      <p className="max-w-xl text-right">
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
