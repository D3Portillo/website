const Airtable = require("airtable")
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)
const table = base("Showcase")

export default async function getShowcaseItems() {
  const allRecords = await table.select({}).all()
  return allRecords.map(({ id, fields }) => {
    const { description, cover, url, name } = fields
    const { small, large } = cover[0].thumbnails
    return {
      name,
      id,
      cover: large.url || small.url,
      description,
      url,
    }
  })
}
