import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const STEPS = [
  {
    title: 'Luotettavuus',
    description: 'Kaikki ammattilaisemme ovat vastuuvakuutettuja.',
    icon: '/assets/icons/ic_customer_service.svg',
  },
  {
    title: 'Tyytyväisyystakuu',
    description: 'Tarjoamme 100% tyytyväisyystakuun kaikille palveluille.',
    icon: '/assets/icons/ic_secure_payment.svg',
  },
  {
    title: 'Joustava maksu',
    description: 'Maksuvaihtoehtoja on useita, ja voit myös tarkastella etukäteen palvelun hintaa.',
    icon: '/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Monikielinen tuki',
    description: 'Palvelu on saatavilla suomeksi ja englanniksi.',
    icon: '/assets/icons/ic_reputation.svg',
  },
];

// ----------------------------------------------------------------------

export default function HomeOrderStep() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Container>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          For Customers
        </Typography>

        <Typography variant="h3" sx={{ my: 3 }}>
          Miksi Hero24?
        </Typography>

        <Box
          sx={{
            display: 'grid',
            my: { xs: 8, md: 10 },
            gap: { xs: 8, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {STEPS.map((value, index) => (
            <div key={value.title}>
              <SvgColor
                src={value.icon}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  color: 'primary.main',
                }}
              />
              <Typography
                variant="overline"
                sx={{ mt: 4, display: 'block', color: 'text.disabled' }}
              >
              </Typography>

              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                {value.title}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
