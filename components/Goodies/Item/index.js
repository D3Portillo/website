import RegularText from "@/components/RegularText"
import Image from "@/components/Image"
import { format } from "date-fns"
import { useMemo } from "react"
import PreviewPDF from "@/components/PreviewPDF"

export default function Item({
  title,
  description,
  presentedDate,
  preview,
  placeholder,
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
      <PreviewPDF url={url}>
        <a
          title="Tap to open"
          target="_blank"
          style={{
            width: 640,
          }}
          className="max-w-xs lg:max-w-full border lg:-mt-px lg:p-6 mb-6 block"
        >
          <div className="overflow-hidden">
            <Image
              width={600}
              height={400}
              src={preview}
              placeholder={placeholder}
              className="w-full max-h-56 lg:max-h-full"
            />
          </div>
          <RegularText className="py-8 px-4 lg:px-0 mb-2 text-center capitalize">
            <b className="uppercase lg:text-2xl">{title}</b>
            <p className="mt-2 lg:px-2">
              {description} ― {dateRender}
            </p>
          </RegularText>
        </a>
      </PreviewPDF>
    </div>
  )
}
