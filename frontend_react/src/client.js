import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_PROJECT_DATASET,
  useCdn: true,
  apiVersion: "2025-04-22",
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});

const bulider = imageUrlBuilder(client);

export const urlFor = (source) => bulider.image(source);
