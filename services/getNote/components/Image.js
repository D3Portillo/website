import ImageItem from "@/components/Image"

export default function Image({ src }) {
  return (
    <div className="w-full my-16 flex justify-center">
      <ImageItem src={src} className="hover:opacity-95" />
    </div>
  )
}
