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
    component: <HomeOwnCustomerForm formId="9b6ec2fa-36cb-4607-8034-16ddf1736097" />,
  },
  {
    value: 'join',
    label: 'Liity nyt (ennen laskutusta asiakkaalle)',
    component: <HomeOwnCustomerForm formId="7b69f0a5-5fd1-456d-90af-74b630ad358c" />,
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
