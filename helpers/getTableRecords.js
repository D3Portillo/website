const Airtable = require("airtable")
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)

/**
 * Returns all records for the provided Airtable base
 * @param { string } tableBaseName - Airtable base name
 * @returns { Promise<Array> }
 */
export default async function getTableRecords(tableBaseName = "") {
  const table = base(tableBaseName)
  return await table.select({}).all()
}
