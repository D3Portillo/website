export default function Image({ src }) {
  return (
    <div className="w-full my-16 flex justify-center hover:opacity-90">
      <img src={src} alt="" />
    </div>
  )
}
