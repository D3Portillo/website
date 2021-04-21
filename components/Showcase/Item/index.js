import ExternalLink from "@/components/ExternalLink"

export default function Item({ description = "", url, cover = "", name = "" }) {
  return (
    <ExternalLink
      title="Tap to visit"
      href={url}
      style={{ width: "40rem" }}
      className="bg-white cursor-pointer flex-shrink-0 flex-grow-0 group"
    >
      <img
        style={{ height: "26rem" }}
        className="w-full object-cover bg-black hover:opacity-95"
        src={cover}
        alt="Loading image..."
      />
      <div className="py-6 px-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-y-2">
        <p>{name}</p>
        <p className="text-xl mt-4 mb-1">{description}</p>
      </div>
    </ExternalLink>
  )
}
