import imageDomains from "@/constants/imageDomains"
import NextImage from "./NextImage"

export default function Image({
  width,
  height,
  placeholder,
  src = "",
  alt = "Loading...",
  style = {},
  className = "",
  hidden = false,
  optimize = true,
}) {
  if (hidden) return null
  const isInNextDomains = imageDomains.find((domain) => {
    return src.includes(domain)
  })
  const baseClassName =
    "flex text-center bg-cover bg-gray-50 italic text-lg items-center justify-center object-cover"
  const props = {
    width,
    height,
    src,
    alt: placeholder ? "" : alt,
    style: placeholder
      ? { ...style, backgroundImage: `url(${placeholder})` }
      : style,
    placeholder,
    baseClassName,
    className,
  }
  if (isInNextDomains && optimize) {
    return <NextImage {...props} />
  }
  return <img {...props} className={`${baseClassName} ${className}`} />
}
