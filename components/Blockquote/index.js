export default function Blockquote({ children }) {
  return (
    <div className="my-32 -mx-6">
      <div className="text-center py-8 lg:py-10 px-10 border-black border-t-2 border-b-2">
        {children}
      </div>
    </div>
  )
}
