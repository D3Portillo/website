const Airtable = require("airtable")
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)
const table = base("Presentations")

export default async function getGoodies() {
  const allRecords = await table.select({}).all()
  return allRecords.map(({ id, fields }) => {
    const { name, description, files, tags, presentedDate } = fields
    const {
      0: { url, thumbnails },
    } = files
    return {
      name,
      id,
      name,
      description,
      preview: thumbnails.large.url,
      url,
      tags,
      presentedDate,
    }
  })
}
