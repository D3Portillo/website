import Image from "@/components/Image"

const Container = ({ children }) => {
  return <div className="w-full my-16 flex justify-center">{children}</div>
}

export default function ImageContainer({ src = "", ...props }) {
  return (
    <Container>
      <Image {...props} src={src} />
    </Container>
  )
}
