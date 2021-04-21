export default function Ul({ children }) {
  return (
    <ul role="list" class="list-disc list-inside flex flex-col space-y-6 mb-12">
      {children}
    </ul>
  )
}
