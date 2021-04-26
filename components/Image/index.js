export default function Image({
  src,
  alt = "LOADING...",
  style,
  className = "",
  hidden,
}) {
  const _className = `flex shadow-inner lg:bg-black lg:text-white italic text-lg items-center justify-center object-cover ${className}`
  return (
    <img
      hidden={hidden}
      className={_className}
      loading="lazy"
      style={style}
      src={src}
      alt={alt}
    />
  )
}
