import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

import {createPreviewSubscriptionHook, createPotableTextComponent} from "next-sanity"

export const client = sanityClient({
  projectId: 'nwd3aka3',
  dataset: 'production',
  apiVersion: '2022-08-14',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export const usePreviewSubscription = createPreviewSubscriptionHook(client);


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);