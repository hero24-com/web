import { add } from 'date-fns';

import { countries } from 'src/assets/data';

import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

export const HOME_SERVICE_OPTIONS = [
  { value: 'Ilmastointipalvelut', label: 'Ilmastointipalvelut' },
  { value: 'Asbestikartoitukset', label: 'Asbestikartoitukset' },
  { value: 'Koti siivoukset', label: 'Koti siivoukset' },
  { value: 'Muuttosiivous', label: 'Muuttosiivous' },
  { value: 'Toimisto siivoukset', label: 'Toimisto siivoukset' },
  { value: 'Remonttisiivous', label: 'Remonttisiivous' },
  { value: 'Ikkunanpesu', label: 'Ikkunanpesu' },
  { value: 'Kuljetusapu', label: 'Kuljetusapu' },
  { value: 'Kotiapu', label: 'Kotiapu' },
  { value: 'Sähkötyöt', label: 'Sähkötyöt' },
  { value: 'Elektroniikkahuolto', label: 'Elektroniikkahuolto' },
  { value: 'Nikkarointi', label: 'Nikkarointi' },
  { value: 'Kodinkonehuolto', label: 'Kodinkonehuolto' },
  { value: 'Kantoapu', label: 'Kantoapu' },
  { value: 'Muuttopalvelu', label: 'Muuttopalvelu' },
  { value: 'Putkityöt', label: 'Putkityöt' },
  { value: 'Kiinteistöhuolto ja isännöintipalvelut', label: 'Kiinteistöhuolto ja isännöintipalvelut' },
  { value: 'Kylmälaitteet', label: 'Kylmälaitteet' },
  { value: 'Remontit ja rakentaminen', label: 'Remontit ja rakentaminen' },
  { value: 'Pihan muutos- ja rakennustyöt', label: 'Pihan muutos- ja rakennustyöt' },
  { value: 'Pihatyöt', label: 'Pihatyöt' },
];

export const _services = [...Array(21)].map((_, index) => {
  const location = countries.map((option) => option.label)[index + 1];

  const gallery = [...Array(6)].map((__, itemIndex) => _mock.image.service(itemIndex + 2));

  const highlights1 = [...Array(1)].map((__, itemIndex) => _mock.serviceSentences1(itemIndex));
  const highlights2 = [...Array(1)].map((__, itemIndex) => _mock.serviceSentences2(itemIndex));
  const highlights3 = [...Array(1)].map((__, itemIndex) => _mock.serviceSentences3(itemIndex));

  const reasons1 = [...Array(1)].map((__, itemIndex) => _mock.reasons1(itemIndex));
  const reasons2 = [...Array(1)].map((__, itemIndex) => _mock.reasons2(itemIndex));
  const reasons3 = [...Array(1)].map((__, itemIndex) => _mock.reasons3(itemIndex));

  const heroUrl = [
    '/assets/images/service/service_post_hero.jpg',
    '/assets/images/service/service_post_01.jpg',
    '/assets/images/service/service_post_02.jpg',
    '/assets/images/service/service_post_03.jpg',
    '/assets/images/service/service_post_04.jpg',
  ][index];

  const program = [...Array(3)].map((__, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.description(itemIndex),
  }));

  const services = (index % 2 && ['Audio guide', 'Food and drinks']) ||
    (index % 3 && ['Lunch', 'Private tour']) ||
    (index % 4 && ['Special activities', 'Entrance fees']) || [
      'Gratuities',
      'Pick-up and drop off',
      'Professional guide',
      'Transport by air-conditioned',
    ];

  const serviceGuide = {
    verified: true,
    role: _mock.role(index),
    name: _mock.fullName(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    phoneNumber: _mock.phoneNumber(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };

  return {
    id: _mock.id(index),
    heroUrl,
    gallery,
    program,
    location,
    services,
    serviceGuide,
    highlights1,
    highlights2,
    highlights3,
    reasons1,
    reasons2,
    reasons3,
    continent: location,
    tags: _tags.slice(0, 5),
    slug: _mock.serviceName(index),
    serviceSlug: _mock.serviceSlug(index),
    duration: '3 days 2 nights',
    createdAt: _mock.time(index),
    favorited: _mock.boolean(index),
    price: _mock.number.price(index),
    languages: ['Russian', 'Spanish'],
    coverUrl: _mock.image.service(index),
    description: _mock.description(index),
    ratingNumber: _mock.number.rating(index),
    totalReviews: _mock.number.nativeL(index),
    priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
    available: {
      start: add(new Date(), { months: 2 }),
      end: add(new Date(), { months: 4 }),
    },
    shareLinks: {
      facebook: `facebook/user-name`,
      instagram: `instagram/user-name`,
      linkedin: `linkedin/user-name`,
      twitter: `twitter/user-name`,
    },
  };
});
