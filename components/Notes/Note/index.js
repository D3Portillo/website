import { ArrowUpRight } from "@/components/Icons"
import Link from "next/link"
import { useMemo } from "react"
import getRandomBackgroundColor from "./helpers/getRandomBackgroundColor"

export default function Note({
  created,
  description,
  title,
  path,
  labels = [],
}) {
  const [backgroundColor, labelsDivider] = useMemo(() => {
    const color = getRandomBackgroundColor()
    const divider = labels.length ? "・" : " — "
    return [color, divider]
  }, [])

  const labelsRender = created + labelsDivider + labels.join("・")
  return (
    <Link href={`/notes/${path}`}>
      <a
        style={{
          backgroundColor,
          breakInside: "avoid",
          pageBreakInside: "avoid",
        }}
        className="block group border-b lg:border-none lg:shadow-inner"
      >
        <div className="flex relative">
          <div className="flex-grow" />
          <div className="hidden lg:flex w-10 h-14 p-2 group-hover:translate-y-8 transition-transform duration-150 text-base transform rotate-90 origin-center whitespace-nowrap items-center uppercase">
            {labelsRender}
          </div>
          <div className="absolute hidden w-10 h-10 group-hover:flex top-0 right-0 bg-black text-white items-center justify-center">
            <ArrowUpRight className="text-3xl" />
          </div>
        </div>
        <section className="px-8 py-10 lg:p-20 leading-tight mb-6">
          <div className="mb-2 lg:hidden text-sm whitespace-nowrap items-center uppercase">
            {labelsRender}
          </div>
          <h2 className="text-3xl lg:text-6xl font-bold">{title}</h2>
          <p className="mt-3 lg:text-3xl">{description}</p>
        </section>
      </a>
    </Link>
  )
}
