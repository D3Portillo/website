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

  return (
    <Link href={`/notes/${path}`}>
      <a
        style={{ backgroundColor }}
        className="block group overflow-hidden shadow-inner"
      >
        <div className="flex relative">
          <div className="flex-grow" />
          <div className="hidden lg:flex w-10 h-14 p-2 group-hover:translate-y-8 transition-transform duration-150 text-base transform rotate-90 origin-center whitespace-nowrap items-center uppercase">
            {created}
            {labelsDivider}
            {labels.join("・")}
          </div>
          <div className="absolute hidden w-10 h-10 group-hover:flex top-0 right-0 bg-black text-white items-center justify-center">
            <ArrowUpRight className="text-3xl" />
          </div>
        </div>
        <p className="p-10 lg:p-20 leading-tight mb-6">
          <b className="text-3xl lg:text-6xl">{title}</b>
          <div className="mt-3 lg:text-3xl">{description}</div>
        </p>
      </a>
    </Link>
  )
}
