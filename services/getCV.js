import getDocument from "@/services/getDocument"

/**
 * Returns url of my CV from Airtable
 * @returns { Promise<string> }
 */
export default async function getCV() {
  const cv = await getDocument("CV")
  return cv?.url
}
