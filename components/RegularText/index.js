export default function RegularText({
  children = null,
  style,
  className = "",
}) {
  return (
    <div style={style} className={`leading-tight lg:text-xl ${className}`}>
      {children}
    </div>
  )
}
