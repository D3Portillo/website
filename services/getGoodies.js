const Airtable = require("airtable")
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)
const table = base("Presentations")

export default async function getGoodies() {
  const allRecords = await table.select({}).all()
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
    return {
      id,
      title,
      description,
      preview: preview.large.url,
      url,
      tags,
      presentedDate,
    }
  })
}
