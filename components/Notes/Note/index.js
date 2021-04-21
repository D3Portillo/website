import { ArrowUpRight } from "@/components/Icons"
import Link from "next/link"

export default function Component({
  created,
  description,
  cover,
  title,
  path,
  labels = [],
}) {
  const labelsDivider = labels.length && "・"
  return (
    <Link href={`/notes/${path}`}>
      <a className="block group border overflow-hidden">
        <div className="w-full flex relative">
          <img
            className="w-full filter grayscale group-hover:filter-none"
            hidden={!cover}
            src={cover}
          />
          <div className="flex-grow" />
          <div className="w-8 h-8 p-2 group-hover:translate-y-8 transition-transform duration-150 text-base transform rotate-90 origin-center whitespace-nowrap flex items-center uppercase">
            {created}
            {labelsDivider}
            {labels.join("・")}
          </div>
          <div className="absolute hidden w-8 h-8 group-hover:flex top-0 right-0 bg-black text-white items-center justify-center">
            <ArrowUpRight className="text-3xl" />
          </div>
        </div>
        <div className="p-20 leading-tight text-3xl mb-6">
          <b>{title}</b>
          <br />
          <i>{description}</i>
        </div>
      </a>
    </Link>
  )
}
