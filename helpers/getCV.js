import getDocument from "@/helpers/getDocument"

/**
 * Returns url of my CV from Airtable
 * @returns { Promise<string> }
 */
export default async function getCV() {
  return (await getDocument("CV"))?.url
}
