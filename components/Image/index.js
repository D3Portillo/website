export default function Image({
  width,
  height,
  loading,
  placeholder,
  src,
  alt = "LOADING...",
  style = {},
  className = "",
  hidden,
}) {
  const _className = `flex text-center bg-cover bg-gray-50 italic text-lg items-center justify-center object-cover ${className}`
  const _style = placeholder
    ? { ...style, backgroundImage: `url(${placeholder})` }
    : style
  return (
    <img
      width={width}
      height={height}
      hidden={hidden}
      className={_className}
      loading={loading}
      style={_style}
      src={src}
      alt={placeholder ? "" : alt}
    />
  )
}
