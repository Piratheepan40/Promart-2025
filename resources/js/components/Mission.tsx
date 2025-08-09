import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Link } from '@inertiajs/react';
import { motion, Variants } from 'framer-motion';

// Animation variants for fade in and slide up
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, ease: 'easeOut', duration: 0.6 },
  }),
};

export default function Mission() {
  return (
    <Box
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        py: 14,
        px: { xs: 2, md: 8 },
        background: 'linear-gradient(135deg, #0047ab 0%, #001f4d 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        color: '#e6f0ff',
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          {/* Badge */}
          <motion.div custom={0} variants={fadeInUpVariants}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(0, 123, 255, 0.15)',
                color: '#4dabf7',
                px: 2,
                py: 0.5,
                borderRadius: 2,
                fontSize: 15,
                fontWeight: 600,
                mb: 3,
                border: '1px solid #4dabf7',
                userSelect: 'none',
                width: 'fit-content',
              }}
            >
              <CheckCircle fontSize="small" />
              Our Mission
            </Box>
          </motion.div>

          {/* Title */}
          <motion.div custom={1} variants={fadeInUpVariants}>
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ color: '#e6f0ff', lineHeight: 1.15 }}
            >
              Empowering Sri Lanka&apos;s <br />
              <Box component="span" sx={{ color: '#4dabf7' }}>
                Construction Future
              </Box>
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div custom={2} variants={fadeInUpVariants}>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontSize: 18,
                maxWidth: 600,
                color: 'rgba(230, 240, 255, 0.8)',
                fontWeight: 500,
                userSelect: 'none',
              }}
            >
              Creating a connected ecosystem where construction and engineering professionals
              thrive, collaborate, and build Sri Lanka’s future together.
            </Typography>
          </motion.div>

          {/* Feature Points */}
          <motion.div custom={3} variants={fadeInUpVariants}>
            <Box mb={5}>
              {[
                {
                  title: 'Building Trust',
                  desc: 'Transparent connections between professionals and clients through verified profiles and reviews.',
                },
                {
                  title: 'Innovation First',
                  desc: 'Leveraging technology to streamline processes and create new opportunities for growth.',
                },
              ].map(({ title, desc }) => (
                <Box key={title} display="flex" alignItems="flex-start" mb={3} gap={2}>
                  <CheckCircle sx={{ color: '#4dabf7', fontSize: 30, mt: 0.5 }} />
                  <Box>
                    <Typography fontWeight="bold" fontSize={18} sx={{ color: '#cfe3ff' }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 16, color: 'rgba(230, 240, 255, 0.7)' }}>
                      {desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* Buttons (Inertia SPA) */}
          <motion.div custom={4} variants={fadeInUpVariants}>
            <Box display="flex" gap={3} flexWrap="wrap" justifyContent="flex-start">
              <Button
                component={Link}
                href="/register-business"
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg, #4dabf7, #1565c0)',
                  borderRadius: 5,
                  px: 5,
                  py: 1.8,
                  fontSize: 16,
                  textTransform: 'none',
                  fontWeight: 700,
                  boxShadow: '0 8px 20px rgba(29, 112, 237, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1565c0, #0047ab)',
                    boxShadow: '0 12px 25px rgba(29, 112, 237, 0.6)',
                    transform: 'scale(1.05)',
                  },
                }}
                aria-label="Join Our Mission"
              >
                Join Our Mission
              </Button>

              <Button
                component={Link}
                href="/about"
                variant="outlined"
                sx={{
                  borderRadius: 5,
                  px: 5,
                  py: 1.8,
                  fontSize: 16,
                  textTransform: 'none',
                  borderColor: '#4dabf7',
                  color: '#4dabf7',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(77, 171, 247, 0.15)',
                    borderColor: '#1565c0',
                    color: '#1565c0',
                    transform: 'scale(1.05)',
                  },
                }}
                aria-label="Learn More"
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Main Gradient Card */}
            <Box
              sx={{
                width: 440,
                height: 280,
                background: 'linear-gradient(135deg, #4dabf7, #1565c0)',
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e6f0ff',
                fontWeight: 'bold',
                boxShadow: '0 15px 40px rgba(0,71,171,0.35)',
                border: '1px solid rgba(77, 171, 247, 0.3)',
                textAlign: 'center',
                padding: 3,
              }}
            >
              <Box>
                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, userSelect: 'none' }}>
                  Building Together
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 17, opacity: 0.95, userSelect: 'none' }}>
                  Connecting professionals across Sri Lanka
                </Typography>
              </Box>
            </Box>

            {/* Floating Circle Top Right */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 15,
                boxShadow: '0 8px 24px rgba(77, 171, 247, 0.6)',
              }}
              style={{
                position: 'absolute',
                top: -28,
                right: 48,
                width: 56,
                height: 56,
                backgroundColor: '#4dabf7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(77, 171, 247, 0.35)',
                color: '#e6f0ff',
                cursor: 'default',
                userSelect: 'none',
                fontWeight: 'bold',
                fontSize: 22,
              }}
              aria-hidden="true"
            >
              ★
            </motion.div>

            {/* Floating Circle Bottom Left */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: -15,
                boxShadow: '0 8px 24px rgba(77, 171, 247, 0.6)',
              }}
              style={{
                position: 'absolute',
                bottom: -28,
                left: 48,
                width: 52,
                height: 52,
                backgroundColor: '#1565c0',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(21, 101, 192, 0.35)',
                color: '#e6f0ff',
                cursor: 'default',
                userSelect: 'none',
                fontWeight: 'bold',
                fontSize: 22,
              }}
              aria-hidden="true"
            >
              ↗
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
