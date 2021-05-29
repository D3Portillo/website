import { ArrowUpRight } from "@/components/Icons"
import Link from "next/link"

export default function Note({
  created,
  icon,
  description,
  title,
  path,
  labels = [],
}) {
  const noteIcon = icon || "/me/default_note_icon.png"
  const labelsRender = created + " — " + labels.join("・")
  return (
    <Link href={`/notes/${path}`}>
      <a
        style={{
          breakInside: "avoid",
          pageBreakInside: "avoid",
        }}
        className="relative block group border-b lg:border-l overflow-hidden"
      >
        <img
          style={{ opacity: 0.03 }}
          className="absolute pointer-events-none inset-0 w-full h-full object-cover filter blur-lg"
          src={noteIcon}
        />
        <div className="flex relative z-1">
          <img
            width={160}
            height={160}
            className="w-20 lg:w-40 rounded-md ml-8 lg:ml-20 mt-10 lg:mt-20"
            src={noteIcon}
          />
          <div className="flex-grow" />
          <div className="hidden lg:flex w-10 h-14 p-2 group-hover:translate-y-8 transition-transform duration-150 text-base transform rotate-90 origin-center whitespace-nowrap items-center uppercase">
            {labelsRender}
          </div>
          <div className="absolute hidden w-10 h-10 group-hover:flex top-0 right-0 bg-black text-white items-center justify-center">
            <ArrowUpRight className="text-3xl" />
          </div>
        </div>
        <section className="relative z-1 px-8 py-10 lg:p-20 leading-tight mb-6">
          <h2 className="text-3xl lg:text-6xl font-bold">{title}</h2>
          <div className="mb-4 mt-2 lg:hidden text-sm whitespace-nowrap items-center uppercase">
            {labelsRender}
          </div>
          <p className="mt-3 lg:text-3xl">{description}</p>
        </section>
      </a>
    </Link>
  )
}
