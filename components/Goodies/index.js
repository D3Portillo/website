import { useMemo } from "react"
import Title from "@/components/shared/Title"
import ItemsGallery from "@/components/shared/ItemsGallery"
import PageSeparator from "@/components/shared/PageSeparator"
import Item from "./Item"

function getTopics(tags = [], topics = []) {
  return tags.filter((tag) => {
    return topics.indexOf(tag) === -1
  })
}

export default function Showcase({ items = [] }) {
  const [itemsRender, topics] = useMemo(() => {
    const topics = []
    const renders = items.map((item) => {
      const { description, id, name, presentedDate, preview, tags, url } = item
      topics.push(...getTopics(tags, topics))
      return (
        <Item
          key={id}
          description={description}
          name={name}
          url={url}
          presentedDate={presentedDate}
          preview={preview}
          tags={tags}
        />
      )
    })
    return [renders, topics]
  }, [items])

  const topicsRender = topics.join(", ")
  return (
    <>
      <Title>SOME GOODIES</Title>
      <img className="w-full max-w-xl mb-8" src="/svg/pinata.svg" alt="" />
      <PageSeparator />
      <ItemsGallery>{itemsRender}</ItemsGallery>
      <PageSeparator />
      <p className="text-2xl text-right">
        Most used topics: <i className="capitalize">{topicsRender}</i>.
      </p>
    </>
  )
}
