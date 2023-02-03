import { groq } from 'next-sanity';

const postFields = groq`
    ...,
    categories->{
      name {
      current
      },
                },
    gallery {
    images[] {
      ...,
      asset->,
    }
    },
    slug,
    title
`;

export const PostsQuery = groq`*[_type == "post"]{
    ${postFields}
}`;
/* eslint-disable */
export const CategoryQuery = groq`*[_type == "category"]`;

/* eslint-disable */

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

/* eslint-disable */
export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
${postFields}
}
`;

export const portfolioAnimationQuery = groq`
  *[_type == "portfolioAnimation"][0] {
labels,
animationImages {
  leftBottomImageAnimation {
    ...,
    asset->
  },
  rightBottomImageAnimation {
    ...,
    asset->
  },
  leftTopImageAnimation {
    ...,
    asset->
  },
  rightTopImageAnimation {
    ...,
    asset->
  },
  mainImageAnimation {
    ...,
    asset->
  }
}
}
`;
