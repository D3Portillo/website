import ImageComponent from "@/components/Image"
import NextImage from "next/image"
import { images } from "@/root/next.config"
import { nanoid } from "nanoid"

export default function Image({ src = "", width, height, placeholder }) {
  const isInNextDomains = images.domains.find((domain) => {
    return src.match(domain)
  })

  if (isInNextDomains) {
    const className = nanoid()
    return (
      <div className="relative w-full my-16 flex justify-center">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .${className} {
              background-image: url(${placeholder});
              background-size: cover
            }`,
          }}
        />
        <NextImage
          width={width}
          className={className}
          height={height}
          src={src}
        />
      </div>
    )
  }
  return (
    <div className="w-full my-16 flex justify-center">
      <ImageComponent
        src={src}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </div>
  )
}
