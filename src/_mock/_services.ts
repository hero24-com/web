import { add } from 'date-fns';

import { countries } from 'src/assets/data';

import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const HOME_SERVICE_OPTIONS = [
  { value: 'Ilmastointityöt', label: 'Ilmastointityöt' },
  { value: 'Asbestikartoitus', label: 'Asbestikartoitus' },
  { value: 'Kotisiivous', label: 'Kotisiivous' },
  { value: 'Muuttosiivous', label: 'Muuttosiivous' },
  { value: 'Toimistosiivous', label: 'Toimistosiivous' },
  { value: 'Remonttisiivous', label: 'Remonttisiivous' },
  { value: 'Ikkunanpesu', label: 'Ikkunanpesu' },
  { value: 'Kuljetuspalvelut', label: 'Kuljetuspalvelut' },
  { value: 'Kotiapu', label: 'Kotiapu' },
  { value: 'Sähköasennukset', label: 'Sähköasennukset' },
  { value: 'Elektroniikkahuolto', label: 'Elektroniikkahuolto' },
  { value: 'Asennuspalvelut', label: 'Asennuspalvelut' },
  { value: 'Kodinkonehuolto', label: 'Kodinkonehuolto' },
  { value: 'Kantoapu', label: 'Kantoapu' },
  { value: 'Muuttopalvelu', label: 'Muuttopalvelu' },
  { value: 'Putkityöt', label: 'Putkityöt' },
  {
    value: 'Kiinteistöhuolto ja isännöintipalvelut',
    label: 'Kiinteistöhuolto ja isännöintipalvelut',
  },
  { value: 'Kylmälaitteet', label: 'Kylmälaitteet' },
  { value: 'Remontit ja rakentaminen', label: 'Remontit ja rakentaminen' },
  {
    value: 'Pihan muutos- ja rakennustyöt',
    label: 'Pihan muutos- ja rakennustyöt',
  },
  { value: 'Pihatyöt', label: 'Pihatyöt' },
  { value: 'Etsitkö muuta palvelua?', label: 'Etsitkö muuta palvelua?' },
];

export const _services = [...Array(22)].map((_, index) => {
  const location = countries.map((option) => option.label)[index + 1];

  const heroUrl = [
    '/assets/images/service/service_01.webp',
    '/assets/images/service/service_02.webp',
    '/assets/images/service/service_03.webp',
    '/assets/images/service/service_04.webp',
    '/assets/images/service/service_05.webp',
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

  return {
    id: _mock.id(index),
    heroUrl,
    program,
    location,
    services,
    gallery1: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex)),
    gallery2: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 5)),
    gallery3: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 10)),
    gallery4: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 15)),
    gallery5: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 20)),
    gallery6: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 25)),
    gallery7: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 30)),
    gallery8: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 35)),
    gallery9: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 40)),
    gallery10: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 45)),
    gallery11: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 50)),
    gallery12: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 55)),
    gallery13: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 60)),
    gallery14: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 65)),
    gallery15: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 70)),
    gallery16: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 75)),
    gallery17: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 80)),
    gallery18: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 85)),
    gallery19: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 90)),
    gallery20: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 95)),
    gallery21: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 100)),
    gallery22: [...Array(5)].map((__, itemIndex) => _mock.image.gallery(itemIndex + 105)),
    stripePaymentLink1: [...Array(1)].map((__, itemIndex) => _mock.stripePaymentLink(itemIndex)),
    stripePaymentLink2: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 1)
    ),
    stripePaymentLink3: [...Array(5)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 2)
    ),
    stripePaymentLink4: [...Array(5)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 7)
    ),
    stripePaymentLink5: [...Array(5)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 12)
    ),
    stripePaymentLink6: [...Array(5)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 17)
    ),
    stripePaymentLink7: [...Array(2)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 22)
    ),
    stripePaymentLink8: [...Array(8)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 24)
    ),
    stripePaymentLink9: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 32)
    ),
    stripePaymentLink10: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 33)
    ),
    stripePaymentLink11: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 34)
    ),
    stripePaymentLink12: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 35)
    ),
    stripePaymentLink13: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 36)
    ),
    stripePaymentLink14: [...Array(18)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 37)
    ),
    stripePaymentLink15: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 55)
    ),
    stripePaymentLink16: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 56)
    ),
    stripePaymentLink17: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 57)
    ),
    stripePaymentLink18: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 58)
    ),
    stripePaymentLink19: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 58)
    ),
    stripePaymentLink20: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 60)
    ),
    stripePaymentLink21: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 61)
    ),
    stripePaymentLink22: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 62)
    ),
    highlights1: _mock.serviceSentences1(index),
    highlights2: _mock.serviceSentences2(index),
    highlights3: _mock.serviceSentences3(index),
    reasons1: _mock.reasons1(index),
    reasons2: _mock.reasons2(index),
    reasons3: _mock.reasons3(index),
    continent: location,
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
    priceSale: 0,
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
