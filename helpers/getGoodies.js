import getTableRecords from "@/helpers/getTableRecords"

export default async function getGoodies() {
  const allRecords = await getTableRecords("Presentations")
  return allRecords.map(({ id, fields }) => {
    const {
      title,
      description,
      files,
      tags,
      presentedDate,
      customCover,
    } = fields
    const {
      0: { url, thumbnails },
    } = files
    const preview = customCover ? customCover[0].thumbnails : thumbnails
    const placeholder = preview.small.url
    return {
      id,
      title,
      description,
      preview: preview.large.url,
      placeholder,
      url,
      tags,
      presentedDate,
    }
  })
}
