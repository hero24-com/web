import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';

import HomeOwnCustomerForm from './home-own-customer-form';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'invoice',
    label: 'Laskuta asiakasta',
    component: (
      <HomeOwnCustomerForm
        formId="8c4a0191-b23f-471e-bace-24bf84e349d1"
        subject="Asiakastiedot - Laskutusasiakas"
      />
    ),
  },
  {
    value: 'join',
    label: 'Liity nyt (ennen laskutusta asiakkaalle)',
    component: (
      <HomeOwnCustomerForm
        formId="e050bc45-bb41-4735-b8f6-54acace87a07"
        subject="Asiakastiedot - Liittymisasiakas"
      />
    ),
  },
];

export default function HomeOwnCustomerFormCombined() {
  const [currentTab, setCurrentTab] = useState('invoice');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pb: { xs: 10, md: 15 },
      }}
    >
      <Tabs id="own-customer-form" value={currentTab} onChange={handleChangeTab}>
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>

      {TABS.map((tab) => tab.value === currentTab && <Box key={tab.value}>{tab.component}</Box>)}
    </Container>
  );
}
