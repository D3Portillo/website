import ExternalLink from "@/components/shared/ExternalLink"
import locale from "date-fns/locale/es"
import { format } from "date-fns"
import { useMemo } from "react"

export default function Item({
  description,
  presentedDate,
  preview,
  tags,
  url,
}) {
  const dateRender = useMemo(() => {
    return format(new Date(presentedDate), "MMMM dd, yyy", {
      locale,
    })
  }, presentedDate)

  return (
    <div className="flex-shrink-0">
      <div className="flex flex-wrap -space-x-px">
        {tags.map((tag) => {
          return <div className="py-4 px-6 border uppercase">{tag}</div>
        })}
      </div>
      <ExternalLink
        style={{
          width: 640,
        }}
        href={url}
        className="border -mt-px p-6 mb-6 block hover:opacity-90 hover:shadow-inner"
      >
        <img
          style={{
            height: 420,
          }}
          src={preview}
          alt=""
          className="w-full object-cover"
        />
        <p className="text-xl p-8 text-center capitalize">
          {description} ― {dateRender}
        </p>
      </ExternalLink>
    </div>
  )
}
