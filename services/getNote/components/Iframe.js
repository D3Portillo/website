import IframeResize from "iframe-resizer-react"

export default function Iframe({ src }) {
  return (
    <IframeResize
      allowfullscreen
      src={src}
      style={{ minHeight: "42rem" }}
      className="bg-black w-full min-w-full my-16"
    />
  )
}
