import { IAuthorProps } from './author';
import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IServiceProps = {
  id: string;
  slug: string;
  serviceSlug: string;
  price: number;
  heroUrl: string;
  createdAt: Date;
  coverUrl: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery1: string[];
  gallery2: string[];
  gallery3: string[];
  gallery4: string[];
  gallery5: string[];
  gallery6: string[];
  gallery7: string[];
  gallery8: string[];
  gallery9: string[];
  gallery10: string[];
  gallery11: string[];
  gallery12: string[];
  gallery13: string[];
  gallery14: string[];
  gallery15: string[];
  gallery16: string[];
  gallery17: string[];
  gallery18: string[];
  gallery19: string[];
  gallery20: string[];
  gallery21: string[];
  gallery22: string[];
  favorited: boolean;
  services: string[];
  description: string;
  languages: string[];
  ratingNumber: number;
  totalReviews: number;
  highlights1: string;
  highlights2: string;
  highlights3: string;
  reasons1: string;
  reasons2: string;
  reasons3: string;
  serviceGuide: IAuthorProps;
  shareLinks: ISocialLinks;
  available: {
    start: Date;
    end: Date;
  };
  program: {
    label: string;
    text: string;
  }[];
};

export type IServiceCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      ccv: string;
    };
  };
};
