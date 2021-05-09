import { ArrowUpRight } from "@/components/Icons"
import Image from "@/components/Image"
import Link from "next/link"
import { useEffect, useState } from "react"

const COVER_WIDTH = 600
export default function Component({
  created,
  description,
  cover,
  title,
  path,
  labels = [],
}) {
  const [hideCover, setHideCover] = useState(!cover)
  useEffect(() => {
    if (window.innerWidth < COVER_WIDTH) {
      setHideCover(true)
    }
  }, [])
  const labelsDivider = labels.length && "・"
  return (
    <Link href={`/notes/${path}`}>
      <a className="block group border-t border-b lg:border-l lg:border-r overflow-hidden focus:shadow-inner">
        <div className="flex relative">
          <div className="w-full">
            <Image
              width={COVER_WIDTH}
              height={315}
              className="filter lg:grayscale group-hover:filter-none"
              hidden={hideCover}
              src={cover}
            />
          </div>
          <div className="flex-grow" />
          <div className="hidden lg:flex w-8 h-8 p-2 group-hover:translate-y-8 transition-transform duration-150 text-base transform rotate-90 origin-center whitespace-nowrap items-center uppercase">
            {created}
            {labelsDivider}
            {labels.join("・")}
          </div>
          <div className="absolute hidden w-8 h-8 group-hover:flex top-0 right-0 bg-black text-white items-center justify-center">
            <ArrowUpRight className="text-3xl" />
          </div>
        </div>
        <p className="p-10 lg:p-20 leading-tight mb-6">
          <b className="text-3xl lg:text-4xl">{title}</b>
          <div className="mt-3 lg:text-3xl">{description}</div>
        </p>
      </a>
    </Link>
  )
}
