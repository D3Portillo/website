import ExternalLink from "@/components/ExternalLink"
import RegularText from "@/components/RegularText"
import NextImage from "next/image"
import styled from "styled-components"

const StyledNextImage = styled(NextImage)`
  background-image: url(${(props) => props.coverPlaceholder});
`

export default function Item({
  description = "",
  url = "",
  cover = "",
  coverPlaceholder = "",
  name = "",
}) {
  return (
    <ExternalLink
      title="Tap to visit"
      href={url}
      style={{ width: "40rem" }}
      className="max-w-xs lg:max-w-full cursor-pointer flex-shrink-0 flex-grow-0 group"
    >
      <div className="relative">
        <StyledNextImage
          width={600}
          height={400}
          alt="..."
          layout="responsive"
          className="bg-cover w-full max-h-64 lg:max-h-full hover:opacity-95"
          src={cover}
          coverPlaceholder={coverPlaceholder}
        />
      </div>
      <div className="py-6 px-4 lg:opacity-0 group-hover:opacity-100 transition-all duration-200 lg:transform group-hover:translate-y-2">
        <p className="text-2xl lg:text-3xl">{name}</p>
        <RegularText className="mt-4 mb-1">{description}</RegularText>
      </div>
    </ExternalLink>
  )
}
