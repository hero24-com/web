'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useLocale } from 'src/locales/locale-provider';

import Iconify from 'src/components/iconify';

const LANGS = [
  {
    value: 'fi',
    label: 'Suomi',
    icon: 'flagpack:fi',
  },
  {
    value: 'en',
    label: 'English',
    icon: 'flagpack:gb-nir',
  },
  {
    value: 'es',
    label: 'Español',
    icon: 'flagpack:es',
  },
] as const;

export default function LanguagePopover() {
  const theme = useTheme();
  const { locale, changeLocale } = useLocale();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeLang = (newLang: (typeof LANGS)[number]['value']) => {
    changeLocale(newLang);
    handleClose();
  };

  const currentLang = LANGS.find((lang) => lang.value === locale);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(Boolean(anchorEl) && {
            bgcolor: theme.palette.action.selected,
          }),
        }}
      >
        <Iconify icon={currentLang?.icon || 'flagpack:fi'} width={28} />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Box sx={{ p: 1 }}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === locale}
              onClick={() => handleChangeLang(option.value)}
              sx={{ px: 1, mx: 1, borderRadius: 0.75 }}
            >
              <Iconify icon={option.icon} width={28} sx={{ mr: 1 }} />
              {option.label}
            </MenuItem>
          ))}
        </Box>
      </Popover>
    </>
  );
}
