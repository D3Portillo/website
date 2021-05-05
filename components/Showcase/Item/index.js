import ExternalLink from "@/components/ExternalLink"
import Image from "@/components/Image"
import RegularText from "@/components/RegularText"

export default function Item({ description = "", url, cover = "", name = "" }) {
  return (
    <ExternalLink
      title="Tap to visit"
      href={url}
      style={{ width: "40rem" }}
      className="bg-white max-w-xs lg:max-w-full cursor-pointer flex-shrink-0 flex-grow-0 group"
    >
      <Image
        style={{ height: "26rem" }}
        className="w-full max-h-64 lg:max-h-full hover:opacity-95"
        src={cover}
      />
      <div className="py-6 px-4 lg:opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-y-2">
        <p className="text-2xl lg:text-3xl">{name}</p>
        <RegularText className="mt-4 mb-1">{description}</RegularText>
      </div>
    </ExternalLink>
  )
}
