import type { Brand } from '../types/brand';
import ImageSpotify from '../assets/images/ImageSpotify.webp';
import ImageSlack from '../assets/images/ImageSlack.webp';
import ImagePaypal from '../assets/images/ImagePaypal.webp';

export const brands: Brand[] = [
  {
    name: "Spotify",
    logo: ImageSpotify
  },
  {
    name: "Slack", 
    logo: ImageSlack
  },
  {
    name: "PayPal",
    logo: ImagePaypal
  }
] as const;