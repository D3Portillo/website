import getTableRecords from "@/helpers/getTableRecords"

export const AirtableDocument = {
  id: String,
  name: String,
  url: String,
}

/**
 * @param { string } documentType
 * @returns { Promise<AirtableDocument?> }
 */
export default async function getDocument(documentType = "") {
  const allRecords = await getTableRecords("Documents")
  const document = allRecords.find(({ fields: { name } }) => {
    return name === documentType
  })
  if (document) {
    const { fields, id } = document
    const { name, files } = fields
    const {
      0: { url },
    } = files
    return {
      id,
      name,
      url,
    }
  }
  return null
}
