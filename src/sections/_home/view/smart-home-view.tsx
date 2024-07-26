'use client';

import SmartHomePricing from '../smart-home/smart-home-pricing';
import SmartHomeInclude from '../smart-home/smart-home-include';
import SmartHomeBenefits from '../smart-home/smart-home-benefits';
import SmartHomeHowItWork from '../smart-home/smart-home-how-it-work';

// ----------------------------------------------------------------------

export default function SmartHomeView() {
  return (
    <>
      <SmartHomePricing />

      <SmartHomeInclude />

      <SmartHomeHowItWork />

      <SmartHomeBenefits />
    </>
  );
}
