import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
export const serviceLinks = [
  {
    order: '1',
    subheader: 'nav.subheaders.cleaningHomeHelp',
    cover: '/assets/images/service/service_3.webp',
    items: [
      { title: 'nav.links.cleaningHome', path: paths.services.cleaningHome },
      { title: 'nav.links.cleaningOffice', path: paths.services.cleaningOffice },
      { title: 'nav.links.cleaningMoving', path: paths.services.cleaningMoving },
      { title: 'nav.links.cleaningRenovation', path: paths.services.cleaningRenovation },
      { title: 'nav.links.cleaningWindow', path: paths.services.cleaningWindow },
      { title: 'nav.links.domesticHelp', path: paths.services.domesticHelp },
    ],
  },
  {
    order: '2',
    subheader: 'nav.subheaders.appliances',
    cover: '/assets/images/service/service_13.webp',
    items: [
      { title: 'nav.links.homeAppliance', path: paths.services.homeAppliance },
      {
        title: 'nav.links.electronicAppliance',
        path: paths.services.electronicAppliance,
      },
      { title: 'nav.links.refrigerationAppliance', path: paths.services.refrigerationAppliance },
    ],
  },
  {
    order: '3',
    subheader: 'nav.subheaders.movingAndLifting',
    cover: '/assets/images/service/service_11.webp',
    items: [
      { title: 'nav.links.movingService', path: paths.services.movingService },
      { title: 'nav.links.movingLifting', path: paths.services.movingLifting },
      { title: 'nav.links.delivery', path: paths.services.delivery },
    ],
  },
  {
    order: '4',
    subheader: 'nav.subheaders.renovationAndLVIS',
    cover: '/assets/images/service/service_10.webp',
    items: [
      { title: 'nav.links.airConditioning', path: paths.services.airConditioning },
      { title: 'nav.links.renovation', path: paths.services.renovation },
      { title: 'nav.links.electrician', path: paths.services.electrician },
      { title: 'nav.links.plumber', path: paths.services.plumber },
      { title: 'nav.links.handyman', path: paths.services.handyman },
      { title: 'nav.links.asbestos', path: paths.services.asbestos },
    ],
  },
  {
    order: '5',
    subheader: 'nav.subheaders.yardAndProperty',
    cover: '/assets/images/service/service_20.webp',
    items: [
      { title: 'nav.links.yardWork', path: paths.services.yardWork },
      {
        title: 'nav.links.propertyMaintenance',
        path: paths.services.propertyMaintenance,
      },
      {
        title: 'nav.links.yardModification',
        path: paths.services.yardModification,
      },
    ],
  },
  {
    order: '6',
    subheader: 'nav.subheaders.other',
    items: [
      { title: 'nav.links.orderHero', path: paths.services.root },
      { title: 'nav.links.joinHero', path: paths.joinHero24 },
      { title: 'nav.links.smartHome', path: paths.smartHome },
      {
        title: 'nav.links.realEstateMaintenance',
        path: paths.realEstateMaintenance,
      },
      { title: 'nav.links.ownCustomer', path: paths.ownCustomer },
      { title: 'nav.links.openOrder', path: paths.services.openOrder },
      { title: 'nav.links.contact', path: paths.contact },
    ],
  },
];

export const navConfig = [
  {
    title: 'nav.top.services',
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
  { title: 'nav.top.orderHero', path: paths.services.root },
  { title: 'nav.top.smartHome', path: paths.smartHome, showIcon: true },
  { title: 'nav.top.realEstateMaintenance', path: paths.realEstateMaintenance },
  { title: 'nav.top.ownCustomer', path: paths.ownCustomer },
  { title: 'nav.top.contact', path: paths.contact },
];
