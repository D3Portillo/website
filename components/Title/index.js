export default function Title({ children = null }) {
  return (
    <h1 className="uppercase text-4xl lg:text-7xl font-bold mt-2 mb-4 lg:mb-16">
      {children}
    </h1>
  )
}
