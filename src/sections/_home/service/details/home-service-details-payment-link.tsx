import { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import Iconify from 'src/components/iconify';
import { blue } from '@mui/material/colors';

// ----------------------------------------------------------------------

type PaymentLink = {
  value: string;
  label: string;
};

type Props = {
  paymentLinks: PaymentLink[];  // Update the expected type to match the data structure
  open?: boolean;
  onClose?: (value: string) => void;
};

export default function HomeServicePaymentLink({ paymentLinks }: Props) {
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
        Varaa nyt - verkkokauppa
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Valitse paketti</DialogTitle>
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
