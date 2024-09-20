import { sub } from 'date-fns';

import {
  _id,
  _prices,
  _ratings,
  _booleans,
  _reasons1,
  _reasons2,
  _reasons3,
  _fullNames,
  _lastNames,
  _sentences,
  _firstNames,
  _serviceSlug,
  _serviceNames,
  _descriptions,
  _serviceSentences1,
  _serviceSentences2,
  _serviceSentences3,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index: number) => _id[index],
  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  boolean: (index: number) => _booleans[index],
  // Text
  serviceSlug: (index: number) => _serviceSlug[index],
  serviceName: (index: number) => _serviceNames[index],
  sentence: (index: number) => _sentences[index],
  serviceSentences1: (index: number) => _serviceSentences1[index],
  serviceSentences2: (index: number) => _serviceSentences2[index],
  serviceSentences3: (index: number) => _serviceSentences3[index],
  description: (index: number) => _descriptions[index],
  reasons1: (index: number) => _reasons1[index],
  reasons2: (index: number) => _reasons2[index],
  reasons3: (index: number) => _reasons3[index],
  // Name
  firstName: (index: number) => _firstNames[index],
  lastName: (index: number) => _lastNames[index],
  fullName: (index: number) => _fullNames[index],
  // Number
  number: {
    rating: (index: number) => _ratings[index],
    price: (index: number) => _prices[index],
  },
  // Image
  image: {
    cover: (index: number) => `/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index: number) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    service: (index: number) => `/assets/images/service/service_${index + 1}.webp`,
    gallery: (index: number) => `/assets/images/gallery/gallery_${index + 1}.webp`,
    marketing: (index: number) => `/assets/images/marketing/marketing-${index + 1}.webp`,
  },
};
