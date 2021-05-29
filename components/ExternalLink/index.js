export default function ExternalLink({
  children = null,
  href,
  target = "_blank",
  download = false,
  className,
  title,
  style,
  ...rest
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
      {...rest}
    >
      {children}
    </a>
  )
}
