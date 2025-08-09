import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
  Business,
  Description,
  Newspaper,
  Campaign,
  Search,
  GroupAdd,
} from '@mui/icons-material';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string; // Inertia SPA route
};

const features: Feature[] = [
  {
    icon: <Business fontSize="large" sx={{ color: 'white' }} />,
    title: 'Business Listings',
    description: 'Showcase your construction and engineering business with detailed profiles and portfolios.',
    href: '/listings',
  },
  {
    icon: <Description fontSize="large" sx={{ color: 'white' }} />,
    title: 'Applications',
    description: 'Access and submit project applications with streamlined digital processes.',
    href: '/applications',
  },
  {
    icon: <Newspaper fontSize="large" sx={{ color: 'white' }} />,
    title: 'News & Industry Updates',
    description: 'Stay informed with the latest construction industry news and regulatory updates.',
    href: '/news',
  },
  {
    icon: <Campaign fontSize="large" sx={{ color: 'white' }} />,
    title: 'Advertising Opportunities',
    description: 'Promote your services and reach potential clients across Sri Lanka.',
    href: '/ads',
  },
  {
    icon: <Search fontSize="large" sx={{ color: 'white' }} />,
    title: 'Easy Search & Navigation',
    description: 'Find the right professionals and services with our advanced search capabilities.',
    href: '/search',
  },
  {
    icon: <GroupAdd fontSize="large" sx={{ color: 'white' }} />,
    title: 'Add Your Business',
    description: 'Join our growing network of trusted construction and engineering professionals.',
    href: '/register-business',
  },
];

export default function OfferSection() {
  const [active, setActive] = useState(0);

  const nextCard = () => setActive((p) => (p + 1) % features.length);
  const prevCard = () => setActive((p) => (p - 1 + features.length) % features.length);

  return (
    <Box sx={{ py: 10, textAlign: 'center', backgroundColor: 'var(--background)' }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: 'var(--foreground)' }}>
        What We <Box component="span" sx={{ color: 'var(--primary)' }}>Offer</Box>
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: 6,
          maxWidth: 600,
          mx: 'auto',
          fontWeight: 400,
          fontSize: '1.125rem',
          lineHeight: 1.6,
        }}
      >
        Comprehensive solutions for construction and engineering professionals to grow their
        business and connect with opportunities.
      </Typography>

      {/* Stacked Cards (responsive) */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 420, md: 400 },
          perspective: '1500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {features.map((feature, index) => {
          const offset = (index - active + features.length) % features.length;
          const isActive = index === active;

          return (
            <motion.div
              key={feature.title}
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.9,
                rotateY:
                  offset === 1 ? -25 : offset === features.length - 1 ? 25 : 0,
                x:
                  // On mobile keep them centered & stacked vertically
                  typeof window !== 'undefined' && window.innerWidth < 900
                    ? 0
                    : offset === 0
                    ? 0
                    : offset === 1
                    ? 320
                    : -320,
                opacity: isActive ? 1 : 0.55,
                zIndex: isActive ? 10 : 0,
              }}
              transition={{ type: 'spring', stiffness: 70, damping: 12 }}
              whileHover={{
                rotateX: isActive ? -6 : 0,
                rotateY: isActive ? 6 : 0,
                boxShadow: '0 25px 60px rgba(0, 123, 255, 0.35)',
                transition: { duration: 0.4 },
              }}
              style={{
                position: 'absolute',
                width: 320,
                height: 360,
                background: 'var(--card)',
                borderRadius: 24,
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                padding: 24,
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
                border: '1px solid var(--border)',
              }}
              aria-roledescription="carousel slide"
              aria-label={`${feature.title}`}
            >
              {/* Icon */}
              <motion.div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #1E90FF, #007BFF)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 15px rgba(30,144,255,0.3)',
                }}
                whileHover={{ y: -4 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <Box sx={{ flexGrow: 1, textAlign: 'center', mt: 3 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>

              {/* CTA — Inertia SPA link */}
              <Box mt={2} textAlign="center">
                <Button
                  component={Link}
                  href={feature.href}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 5,
                    textTransform: 'none',
                    borderColor: '#1E90FF',
                    color: '#1E90FF',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    '&:hover': {
                      borderColor: '#007BFF',
                      background:
                        'linear-gradient(to right, rgba(30,144,255,0.05), rgba(0,123,255,0.05))',
                    },
                  }}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          );
        })}
      </Box>

      {/* Navigation */}
      <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button onClick={prevCard} variant="outlined" sx={{ borderRadius: 20 }}>
          Prev
        </Button>
        <Button onClick={nextCard} variant="outlined" sx={{ borderRadius: 20 }}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
