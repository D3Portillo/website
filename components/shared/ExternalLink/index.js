export default function ExternalLink({
  children = null,
  href = "/#",
  target = "_blank",
  download = false,
  className,
  title,
  style,
}) {
  return (
    <a
      style={style}
      title={title}
      href={href}
      download={download}
      className={className}
      target={target}
      rel="noreferer noopener"
    >
      {children}
    </a>
  )
}
