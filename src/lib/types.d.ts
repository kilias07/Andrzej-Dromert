import type {
  PortableTextBlock,
  PortableTextLink,
  PortableTextSpan,
} from '@portabletext/types';
import { SanityAssetDocument } from '@sanity/client';

type MainImage = { mainImage: boolean };

type DefaultValues = {
  createdAt?: string;
  updatedAt?: string;
  _id: string;
  _rev?: string;
  _type?: string;
};

type ImageSanityPluginMedia = {
  altText: string;
  assetId: string;
  description: string;
  extension: string;
};

export interface ImageSanity
  extends DefaultValues,
  Partial<ImageSanityPluginMedia, DefaultValues> {
  asset: ImageSanityPluginMedia & SanityAssetDocument;
  _type: 'image';
  _key?: string;
}

export interface PostFields extends DefaultValues {
  title: string;
  categories: Category[];
  gallery: {
    images: [ImageSanity & MainImage];
  };
  publishedAt: Date;
  body: (PortableTextBlock & ImageSanity)[];
  slug: {
    _type?: string;
    current: string;
  };
}

export interface AboutFields extends DefaultValues {
  title: string;
  image: ImageSanity;
  body: PortableTextBlock<PortableTextSpan | PortableTextLink>[];
}

type Category = {
  _createdAt?: string;
  _updatedAt?: string;
  _id: string;
  _rev?: string;
  _type?: string;
  title: string;
};

export interface PortfolioAnimationData extends DefaultValues {
  labels: {
    topLabel: string;
    bottomLabel: string;
    shortDescription: string;
  };
  animationImages: {
    leftBottomImageAnimation: ImageSanity;
    leftTopImageAnimation: ImageSanity;
    rightBottomImageAnimation: ImageSanity;
    rightTopImageAnimation: ImageSanity;
    mainImageAnimation: ImageSanity;
  };
}
