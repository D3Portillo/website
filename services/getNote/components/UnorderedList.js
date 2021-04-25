export default function UnorderedList({ children }) {
  return (
    <ul
      role="list"
      class="list-disc list-inside flex flex-col space-y-3 lg:space-y-4 mb-12"
    >
      {children}
    </ul>
  )
}
