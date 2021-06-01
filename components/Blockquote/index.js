export default function Blockquote({ children }) {
  return (
    <div className="my-32 -mx-8 lg:-mx-10">
      <div className="text-center p-8 lg:p-10  border-black border-t-2 border-b-2">
        {children}
      </div>
    </div>
  )
}
