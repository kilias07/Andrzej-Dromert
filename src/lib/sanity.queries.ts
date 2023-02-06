import { groq } from 'next-sanity';

const postFields = groq`
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

export const PostsQuery = groq`*[_type == "post"]{
    ${postFields}
}`;

export const CategoryQuery = groq`*[_type == "category"]`;

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

// For getStaticProps
export const postBySlugQuery = groq`
    *[_type == "post" && slug.current == $slug][0] {
    ${postSlugQuery}
}
`;
// For getStaticPaths
export const postByIdQuery = groq`
    *[_type == "post" && defined(slug.current)]{
        "params": {
            "slug": slug.current
        }
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

export const aboutQuery = groq` 
*[_type == "about"][0] {
    ...,
    image {
        ...,
        asset->,
    },
    title
}
`;
