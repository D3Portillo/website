import ImageComponent from "@/components/Image"
import NextImage from "next/image"
import { images } from "@/root/next.config"
import { nanoid } from "nanoid"

const Container = ({ children }) => {
  return (
    <div className="relative w-full my-16 flex justify-center">{children}</div>
  )
}

export default function Image({ src = "", width, height, placeholder }) {
  const isInNextDomains = images.domains.find((domain) => {
    return src.match(domain)
  })

  if (isInNextDomains && placeholder) {
    const className = nanoid()
    return (
      <Container>
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
      </Container>
    )
  }
  return (
    <Container>
      <ImageComponent
        src={src}
        placeholder={placeholder}
        width={width}
        height={height}
      />
    </Container>
  )
}
