const postFields = `
    _id,
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

export const PostsQuery = `*[_type == "post"]{
    ${postFields}
}`;

export const CategoryQuery = '*[_type == "category"]';

export const postSlugQuery = `
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
    title,
    body[] {
        ...,
        _type == "image" => {
            ...,
            asset->
        }
    }
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
${postSlugQuery}
}
`;

export const portfolioAnimationQuery = `
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
