import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  gallery,
  "slug": slug.current,
  "category": category->{title},
`;

export const PostsQuery = groq`*[_type == "post"]`;

export const CategoryQuery = groq`*[_type == "category"]`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
