import Link from "next/link"
import RegularText from "@/components/RegularText"
import Image from "@/components/Image"
import { format } from "date-fns"
import { useMemo } from "react"

export default function Item({
  title,
  description,
  presentedDate,
  preview,
  tags,
  url,
}) {
  const dateRender = useMemo(() => {
    return format(new Date(presentedDate), "MMMM dd, yyy")
  }, [presentedDate])

  return (
    <div className="flex-shrink-0">
      <div className="hidden lg:flex flex-wrap -space-x-px">
        {tags.map((tag) => {
          return (
            <RegularText
              key={`tag-${tag}`}
              className="py-4 px-6 border uppercase"
            >
              {tag}
            </RegularText>
          )
        })}
      </div>
      <Link
        href={{
          pathname: "/preview-pdf",
          query: {
            url,
          },
        }}
      >
        <a
          target="_blank"
          style={{
            width: 640,
          }}
          className="max-w-xs lg:max-w-full border lg:-mt-px lg:p-6 mb-6 block hover:opacity-90 hover:shadow-inner"
        >
          <Image
            style={{
              height: 420,
            }}
            src={preview}
            className="w-full max-h-56 lg:max-h-full object-cover"
          />
          <RegularText className="py-8 px-4 lg:px-0 mb-2 text-center capitalize">
            <b className="uppercase lg:text-2xl">{title}</b>
            <p className="mt-2 lg:px-2">
              {description} ― {dateRender}
            </p>
          </RegularText>
        </a>
      </Link>
    </div>
  )
}
