import NextImage from "next/image"
import { nanoid } from "nanoid"

export default function NextImageContainer({
  src = "",
  alt = "",
  className = "",
  baseClassName = "",
  placeholder,
  width,
  height,
}) {
  const bgClx = nanoid()
  return (
    <div style={{ minWidth: width, minHeight: height }} className={className}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .${bgClx} {
              background-image: url(${placeholder});
            }`,
        }}
      />
      <NextImage
        layout="responsive"
        alt={alt}
        src={src}
        width={width}
        height={height}
        objectFit="cover"
        className={`${bgClx} ${baseClassName}`}
      />
    </div>
  )
}
