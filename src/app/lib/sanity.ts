import { createClient } from "next-sanity"

const projectId = "a4o3uzsh";
const dataset = 'production'
const apiVersion = '2023-01-01'


export const client = createClient({
  projectId,
  dataset,
  apiVersion,

  // Turn to true after development.
  useCdn: false,
})
