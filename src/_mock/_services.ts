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

export const HOME_SERVICE_PAYMENT_LINKS = [
  { value: 'https://book.stripe.com/fZeaIieNVeMd9q09G2', label: 'Ilmastointityöt 69€/h' },
  { value: 'https://book.stripe.com/9AQbMmgW36fHdGgaK7', label: 'Asbestikartoitus 199€/h' },
  { value: 'https://book.stripe.com/00geYy5dleMd45G3hG', label: 'Kotisiivous 44€/h' },
  { value: 'https://book.stripe.com/8wM4jU49h8nPdGg5pP', label: 'Muuttosiivous 44€/h' },
  { value: 'https://book.stripe.com/3cs17I6hp47z8lWg4u', label: 'Toimistosiivous 44€/h' },
  { value: 'https://book.stripe.com/7sIbMm49h0Vn59Kf0r', label: 'Remonttisiivous 44€/h' },
  { value: 'https://book.stripe.com/7sI5nY7lt33vdGgf0s', label: 'Ikkunanpesu 44€/h' },
  { value: 'https://book.stripe.com/6oEg2C9tB9rTby86tX', label: 'Kuljetuspalvelut 59€/h' },
  { value: 'https://book.stripe.com/7sI8Aa8px9rT7hScSm', label: 'Kotiapu 39€/h' },
  { value: 'https://book.stripe.com/8wM7w65dl0Vn9q09Gb', label: 'Sähköasennukset 69€/h' },
  { value: 'https://book.stripe.com/5kA5nY35d1Zr7hS6u2', label: 'Elektroniikkahuolto 69€/h' },
  { value: 'https://book.stripe.com/28obMm8px47z31C6u0', label: 'Asennuspalvelut 54€/h' },
  { value: 'https://book.stripe.com/bIY7w67lt6fH1Xyg4B', label: 'Kodinkonehuolto 69€/h' },
  { value: 'https://book.stripe.com/9AQ17IeNV6fH1Xy5pZ', label: 'Kantoapu 44€/h' },
  { value: 'https://book.stripe.com/aEU3fQaxF1Zr6dOf0A', label: 'Muutto 59€/h' },
  { value: 'https://book.stripe.com/14k3fQ0X5bA17hS05H', label: 'Putkityöt 69€/h' },
  {
    value: 'https://book.stripe.com/dR6dUu6hp0VneKk05I',
    label: 'Kiinteistöhuolto ja isännöintipalvelut 44€/h',
  },
  { value: 'https://book.stripe.com/4gweYybBJcE559K4lZ', label: 'Kylmälaitteiden asennus 74€/h' },
  { value: 'https://book.stripe.com/28o2bM9tB5bD8lW8Cg', label: 'Remontit ja rakentaminen 56€/h' },
  {
    value: 'https://book.stripe.com/4gwaIifRZ33vdGgbOt',
    label: 'Pihan muutos- ja rakennustyöt 56€/h',
  },
  { value: 'https://book.stripe.com/28odUu5dl47z59K9Gm', label: 'Pihatyöt 56€/h' },
  { value: 'https://www.hero24.com/koti-palvelu', label: 'Etsitkö muuta palvelua?' },
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
    stripePaymentLink3: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 2)
    ),
    stripePaymentLink4: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 3)
    ),
    stripePaymentLink5: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 4)
    ),
    stripePaymentLink6: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 5)
    ),
    stripePaymentLink7: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 6)
    ),
    stripePaymentLink8: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 7)
    ),
    stripePaymentLink9: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 8)
    ),
    stripePaymentLink10: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 9)
    ),
    stripePaymentLink11: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 10)
    ),
    stripePaymentLink12: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 11)
    ),
    stripePaymentLink13: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 12)
    ),
    stripePaymentLink14: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 13)
    ),
    stripePaymentLink15: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 14)
    ),
    stripePaymentLink16: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 15)
    ),
    stripePaymentLink17: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 16)
    ),
    stripePaymentLink18: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 17)
    ),
    stripePaymentLink19: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 18)
    ),
    stripePaymentLink20: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 19)
    ),
    stripePaymentLink21: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 20)
    ),
    stripePaymentLink22: [...Array(1)].map((__, itemIndex) =>
      _mock.stripePaymentLink(itemIndex + 21)
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
