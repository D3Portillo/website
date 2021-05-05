export default function SubTitle({ children = null }) {
  return (
    <h2 className="leading-tight text-2xl lg:text-6xl font-bold mt-4 lg:mt-16 mb-6 lg:mb-10">
      {children}
    </h2>
  )
}
