export default function FullWidthContainer({
  className = "",
  children = null,
}) {
  return <div className={`-mx-10 lg:-mx-20 ${className}`}>{children}</div>
}
