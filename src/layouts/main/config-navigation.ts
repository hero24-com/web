import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
export const serviceLinks = [
  {
    order: '1',
    subheader: 'Siivous ja kotiapu',
    cover: '/assets/images/service/service_3.webp',
    items: [
      { title: 'Kotisiivous', path: paths.services.cleaningHome },
      { title: 'Toimistosiivous', path: paths.services.cleaningOffice },
      { title: 'Muuttosiivous', path: paths.services.cleaningMoving },
      { title: 'Remonttisiivous', path: paths.services.cleaningRenovation },
      { title: 'Ikkunanpesu', path: paths.services.cleaningWindow },
      { title: 'Kotiapu', path: paths.services.domesticHelp },
    ],
  },
  {
    order: '2',
    subheader: 'Kodinkoneet ja laitteet',
    cover: '/assets/images/service/service_13.webp',
    items: [
      { title: 'Kodinkonehuolto', path: paths.services.homeAppliance },
      {
        title: 'Elektroniikkahuolto',
        path: paths.services.electronicAppliance,
      },
      { title: 'Kylmälaitteet', path: paths.services.refrigerationAppliance },
    ],
  },
  {
    order: '3',
    subheader: 'Muuttopalvelu ja Kantoapu',
    cover: '/assets/images/service/service_11.webp',
    items: [
      { title: 'Muuttopalvelu', path: paths.services.movingService },
      { title: 'Kantoapu', path: paths.services.movingLifting },
      { title: 'Kuljetusapu', path: paths.services.delivery },
    ],
  },
  {
    order: '4',
    subheader: 'Remontointi ja LVIS',
    cover: '/assets/images/service/service_10.webp',
    items: [
      { title: 'Ilmastointipalvelut', path: paths.services.airConditioning },
      { title: 'Remontit ja rakentaminen', path: paths.services.renovation },
      { title: 'Sähkötyöt', path: paths.services.electrician },
      { title: 'Putkityöt', path: paths.services.plumber },
      { title: 'Nikkarointi', path: paths.services.handyman },
      { title: 'Asbestikartoitukset', path: paths.services.asbestos },
    ],
  },
  {
    order: '5',
    subheader: 'Pihat ja kiinteistöhuollot',
    cover: '/assets/images/service/service_20.webp',
    items: [
      { title: 'Pihatyöt', path: paths.services.yardWork },
      {
        title: 'Kiinteistöhuolto ja isännöintipalvelut',
        path: paths.services.propertyMaintenance,
      },
      {
        title: 'Pihan muutos- ja rakennustyöt',
        path: paths.services.yardModification,
      },
    ],
  },
  {
    order: '6',
    subheader: 'Muuta',
    items: [
      { title: 'Tilaa Sankari', path: paths.services.root },
      { title: 'Liity Sankariksi', path: paths.joinHero24 },
      { title: 'Huoleton asuminen', path: paths.smartHome },
      {
        title: 'Huoltopalvelut Taloyhtiöille',
        path: paths.realEstateMaintenance,
      },
      { title: 'Laskuta omia asiakkaita', path: paths.ownCustomer },
      { title: 'Etsitkö muuta palvelua?', path: paths.services.openOrder },
      { title: 'Yhteystiedot', path: paths.contact },
    ],
  },
];

export const navConfig = [
  {
    title: 'Palvelut',
    path: paths.services.root,
    children: [
      serviceLinks[0],
      serviceLinks[1],
      serviceLinks[2],
      serviceLinks[3],
      serviceLinks[4],
      serviceLinks[5],
    ],
  },
  { title: 'Tilaa sankari', path: paths.services.root },
  { title: 'Huoleton asuminen', path: paths.smartHome, showIcon: true },
  { title: 'Huoltopalvelut Taloyhtiöille', path: paths.realEstateMaintenance },
  { title: 'Laskuta omia asiakkaita', path: paths.ownCustomer },
  { title: 'Yhteystiedot', path: paths.contact },
];
