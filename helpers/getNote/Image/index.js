import Image from "@/components/Image"

export default function ImageContainer(props) {
  return (
    <div className="w-full my-16 flex justify-center">
      <Image {...props} optimize={false} />
    </div>
  )
}
