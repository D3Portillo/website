export default function Ol({ children }) {
  return (
    <ol role="list" class="list-decimal list-inside flex flex-col space-y-6 mb-12">
      {children}
    </ol>
  )
}
