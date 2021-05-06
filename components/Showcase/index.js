import { useMemo } from "react"
import Title from "@/components/Title"
import Item from "./Item"
import ItemsGallery from "@/components/ItemsGallery"

export default function Showcase({ items = [] }) {
  const itemsRender = useMemo(() => {
    return items.map((item) => {
      const { id, cover, name, description, url, coverPlaceholder } = item
      return (
        <Item
          key={id}
          cover={cover}
          coverPlaceholder={coverPlaceholder}
          name={name}
          description={description}
          url={url}
        />
      )
    })
  }, [items])

  return (
    <>
      <Title>THINGS I’M PROUD</Title>
      <ItemsGallery>{itemsRender}</ItemsGallery>
    </>
  )
}
