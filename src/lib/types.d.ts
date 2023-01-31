import type {
  PortableTextBlock,
  PortableTextLink,
  PortableTextSpan,
} from '@portabletext/types';
import { SanityImageAsset } from '@sanity/asset-utils';

type MainImage = { mainImage: boolean };

type DefaultValues = {
  createdAt?: string;
  updatedAt?: string;
  _id: string;
  _rev?: string;
  _type?: string;
};

type Images = MainImage & {
  asset: SanityImageAsset &
  DefaultValues & {
    altText?: string;
    assetId?: string;
    description?: string;
    extension?: string;
  };
  _type: 'image';
  _key: string;
};

export interface PostFields {
  _createdAt?: Date;
  _id: string;
  _rev?: string;
  _type?: string;
  _updatedAt?: string;
  title: string;
  categories: Category[];
  gallery: {
    images: [Images];
  };
  publishedAt: Date;
  body: PortableTextBlock<PortableTextSpan | PortableTextLink>[];
  slug: {
    _type?: string;
    current: string;
  };
}

export type AboutFields =
    DefaultValues &
    Omit<Images, MainImage> &
    {
      body: PortableTextBlock<PortableTextSpan | PortableTextLink>[];
    };

interface Category {
  _createdAt?: string;
  _updatedAt?: string;
  _id: string;
  _rev?: string;
  _type?: string;
  title: string;
}
