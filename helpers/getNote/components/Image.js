import ImageComponent from "@/components/Image"
import NextImage from "next/image"
import imageDomains from "@/constants/imageDomains"
import { nanoid } from "nanoid"

const Container = ({ children }) => {
  return (
    <div className="relative w-full my-16 flex justify-center">{children}</div>
  )
}

export default function Image({ src = "", placeholder, ...props }) {
  const isInNextDomains = imageDomains.find((domain) => {
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
        <NextImage {...props} src={src} />
      </Container>
    )
  }
  return (
    <Container>
      <ImageComponent {...props} src={src} placeholder={placeholder} />
    </Container>
  )
}
