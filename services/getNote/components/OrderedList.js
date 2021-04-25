export default function OrderedList({ children }) {
  return (
    <ol
      role="list"
      class="list-decimal list-inside flex flex-col spae-y-3 lg:space-y-4 mb-12"
    >
      {children}
    </ol>
  )
}
