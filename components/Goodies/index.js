import { useMemo } from "react"
import Title from "@/components/Title"
import ItemsGallery from "@/components/ItemsGallery"
import PageSeparator from "@/components/PageSeparator"
import Item from "./Item"

export default function Showcase({ items = [] }) {
  const [itemsRender, topics] = useMemo(() => {
    let topics = []
    const renders = items.map((item) => {
      const {
        placeholder,
        title,
        description,
        id,
        presentedDate,
        preview,
        tags,
        url,
      } = item
      topics = new Set([...topics, ...tags])
      return (
        <Item
          title={title}
          key={id}
          placeholder={placeholder}
          description={description}
          url={url}
          presentedDate={presentedDate}
          preview={preview}
          tags={tags}
        />
      )
    })
    return [renders, Array.from(topics)]
  }, [items])

  const topicsRender = topics.join(", ")
  return (
    <>
      <Title>SOME GOODIES</Title>
      <img
        className="w-full max-w-2xl mb-8 mt-12 lg:mt-0"
        src="/svg/pinata.svg"
        alt="Pinata is loading..."
      />
      <PageSeparator />
      <ItemsGallery>{itemsRender}</ItemsGallery>
      <PageSeparator />
      <p className="lg:text-2xl text-right">
        Topics: <i className="capitalize">{topicsRender}</i>.
      </p>
    </>
  )
}
