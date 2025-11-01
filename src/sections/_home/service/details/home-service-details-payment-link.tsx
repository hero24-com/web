'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { blue } from '@mui/material/colors';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

type PaymentLink = {
  value: string;
  label: string;
};

type Props = {
  paymentLinks: PaymentLink[];
};

export default function HomeServicePaymentLink({ paymentLinks }: Props) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (value: string) => {
    window.open(value, '_blank');
    setOpen(false);
  };

  return (
    <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
      <Button onClick={handleClickOpen} fullWidth variant="contained" color="inherit" size="large">
        {t('services.payment.openDialogButton')}
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>{t('services.payment.choosePackageTitle')}</DialogTitle>
        <List sx={{ pt: 0 }}>
          {paymentLinks.map((link) => (
            <ListItem disableGutters key={link.value}>
              <ListItemButton onClick={() => handleListItemClick(link.value)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <Iconify width={16} icon="ic:baseline-euro" className="caption" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </Stack>
  );
}
