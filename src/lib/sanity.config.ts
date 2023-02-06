import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-10-21';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
);

const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => {
  if (!source) throw Error('Missing source');
  return builder.image(source);
};
export { client, urlFor };
