import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new SanityClient({
  projectId: "05gv0y7c",
  dataset: "production",
  apiVersion: "2022-07-30",
  useCdnL: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
