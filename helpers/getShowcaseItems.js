import getTableRecords from "@/helpers/getTableRecords"

export default async function getShowcaseItems() {
  const allRecords = await getTableRecords("Showcase")
  return allRecords.map(({ id, fields }) => {
    const { description, cover, url, name } = fields
    const { small, large } = cover[0].thumbnails
    return {
      name,
      id,
      cover: large.url,
      coverPlaceholder: small.url,
      description,
      url,
    }
  })
}
