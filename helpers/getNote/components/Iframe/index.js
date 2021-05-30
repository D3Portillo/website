import IframeResize from "iframe-resizer-react"

export default function Iframe({ src }) {
  return (
    <IframeResize
      allowFullScreen
      src={src}
      style={{
        width: 1,
        height: "16rem",
        minWidth: "100%",
      }}
      className="bg-black my-16"
    />
  )
}
