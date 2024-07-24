import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------
export const pageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Landing', path: paths.marketing.root },
      { title: 'Services', path: paths.marketing.services },
      { title: 'Case Studies', path: paths.marketing.caseStudies },
      { title: 'Case Study', path: paths.marketing.caseStudy },
      { title: 'Blog Posts', path: paths.marketing.posts },
      { title: 'Blog Post', path: paths.marketing.post },
      { title: 'About', path: paths.marketing.about },
      { title: 'Contact', path: paths.marketing.contact },
    ],
  },
  {
    order: '6',
    subheader: 'Travel',
    cover: '/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Landing', path: paths.travel.root },
      { title: 'Tours', path: paths.travel.tours },
      { title: 'Tour', path: paths.travel.tour },
      { title: 'Checkout', path: paths.travel.checkout },
      { title: 'Order Completed', path: paths.travel.orderCompleted },
      { title: 'Blog Posts', path: paths.travel.posts },
      { title: 'Blog Post', path: paths.travel.post },
      { title: 'About', path: paths.travel.about },
      { title: 'Contact', path: paths.travel.contact },
    ],
  },
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: paths.career.root },
      { title: 'Jobs', path: paths.career.jobs },
      { title: 'Job', path: paths.career.job },
      { title: 'Blog Posts', path: paths.career.posts },
      { title: 'Blog Post', path: paths.career.post },
      { title: 'About', path: paths.career.about },
      { title: 'Contact', path: paths.career.contact },
    ],
  },
  {
    order: '5',
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [
      { title: 'Landing', path: paths.eLearning.root },
      { title: 'Courses', path: paths.eLearning.courses },
      { title: 'Course', path: paths.eLearning.course },
      { title: 'Blog Posts', path: paths.eLearning.posts },
      { title: 'Blog Post', path: paths.eLearning.post },
      { title: 'About', path: paths.eLearning.about },
      { title: 'Contact', path: paths.eLearning.contact },
    ],
  },
  {
    isNew: true,
    order: '3',
    subheader: 'E-commerce',
    cover: '/assets/images/menu/menu_ecommerce.jpg',
    items: [
      { title: 'Landing', path: paths.eCommerce.root },
      { title: 'Products', path: paths.eCommerce.products },
      { title: 'Product', path: paths.eCommerce.product },
      { title: 'Cart', path: paths.eCommerce.cart },
      { title: 'Checkout', path: paths.eCommerce.checkout },
      { title: 'Order Completed', path: paths.eCommerce.orderCompleted },
      { title: 'Wishlist', path: paths.eCommerce.wishlist },
      { title: 'Compare', path: paths.eCommerce.compare },
      { title: 'Account Personal', path: paths.eCommerce.account.personal },
      { title: 'Account Wishlist', path: paths.eCommerce.account.wishlist },
      { title: 'Account Vouchers', path: paths.eCommerce.account.vouchers },
      { title: 'Account Orders', path: paths.eCommerce.account.orders },
      { title: 'Account Payment', path: paths.eCommerce.account.payment },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: 'Login Cover', path: paths.loginCover },
      { title: 'Login Illustration', path: paths.loginIllustration },
      { title: 'Login Background', path: paths.loginBackground },
      { title: 'Register Cover', path: paths.registerCover },
      { title: 'Register Illustration', path: paths.registerIllustration },
      { title: 'Register Background', path: paths.registerBackground },
      { title: 'Forgot Password', path: paths.forgotPassword },
      { title: 'Verify Code', path: paths.verify },
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

export const serviceLinks = [
  {
    order: '1',
    subheader: 'Siivous ja kotiapu',
    cover: '/assets/images/service/service_3.png',
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
    cover: '/assets/images/service/service_10.png',
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
    cover: '/assets/images/service/service_11.png',
    items: [
      { title: 'Muuttopalvelu', path: paths.services.movingService },
      { title: 'Kantoapu', path: paths.services.movingLifting },
      { title: 'Kuljetusapu', path: paths.services.delivery },
    ],
  },
  {
    order: '4',
    subheader: 'Remontointi ja LVIS',
    cover: '/assets/images/service/service_1.png',
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
    cover: '/assets/images/service/service_20.png',
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
  { title: 'Tilaa Sankari', path: paths.services.root },
  { title: 'Liity Sankariksi', path: paths.joinHero24 },
  { title: 'Yhteystiedot', path: paths.contact },
];
