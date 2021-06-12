import { IoMdQuote } from "react-icons/io"

export default function Blockquote({ children }) {
  return (
    <div className="my-32 -mx-8 lg:-mx-10">
      <blockquote className="flex flex-row-reverse lg:flex-row pl-6 lg:pl-0">
        <div className="p-8 lg:px-10 lg:py-32 flex-grow">{children}</div>
        <div className="w-1 lg:w-2 bg-black flex items-center justify-center">
          <div className="bg-white p-2">
            <IoMdQuote className="text-4xl lg:text-5xl" />
          </div>
        </div>
      </blockquote>
    </div>
  )
}
