export default function OrderedList({ children }) {
  return (
    <ol
      role="list"
      className="list-decimal list-inside flex flex-col space-y-3 lg:space-y-4 mb-12"
    >
      {children}
    </ol>
  )
}
