import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from '@inertiajs/react';
import Lottie from 'lottie-react';
import Particles from 'react-tsparticles';
import AnimatedLottieWrapper from './AnimatedLottieWrapper';
import { motion, Variants } from 'framer-motion';

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const bounceArrowVariants: Variants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch('/construction.json')
      .then((res) => res.json())
      .then((data: Record<string, unknown>) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation JSON:', err));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bgTranslateX = mousePos.x * 10;
  const bgTranslateY = mousePos.y * 10;
  const textTranslateX = mousePos.x * 20;
  const textTranslateY = mousePos.y * 20;
  const lottieTranslateX = mousePos.x * 25;
  const lottieTranslateY = mousePos.y * 25;

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: { xs: '90vh', md: '100vh' },
        background:
          'linear-gradient(270deg, #002d6b, #074aa8, #0b61d1, #002d6b)',
        backgroundSize: '600% 600%',
        animation: 'gradientShift 30s ease infinite',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontFamily: "'Montserrat', sans-serif",
        px: { xs: 3, md: 8 },
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      {/* Particle Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          transform: `translate3d(${bgTranslateX}px, ${bgTranslateY}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Particles
          options={{
            fpsLimit: 60,
            particles: {
              number: { value: 30, density: { enable: true, area: 800 } },
              color: { value: '#1e90ff' },
              opacity: { value: 0.15 },
              size: { value: 3 },
              move: { enable: true, speed: 0.4 },
              links: {
                enable: true,
                distance: 150,
                color: '#1e90ff',
                opacity: 0.1,
                width: 1,
              },
            },
            interactivity: { events: { onHover: { enable: false } } },
            detectRetina: true,
          }}
        />
      </Box>

      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
        }}
      >
        {/* Left Text Content */}
        <motion.div
          style={{
            flex: 1,
            textAlign: 'left',
            transform: `translate3d(${textTranslateX}px, ${textTranslateY}px, 0)`,
          }}
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUpVariants}
        >
          <Box
            sx={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.15)',
              px: 2,
              py: 0.7,
              borderRadius: 9999,
              fontWeight: 700,
              letterSpacing: 0.3,
              fontSize: 14,
              mb: 2,
              userSelect: 'none',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            🔧 ProMart Platform
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.8rem', md: '4.2rem' },
              lineHeight: 1.1,
              mb: 3,
              textShadow: '0 5px 20px rgba(0,0,0,0.6)',
              userSelect: 'text',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Building Sri Lanka’s Future <br /> with Trusted Experts
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              maxWidth: 560,
              color: 'rgba(255,255,255,0.85)',
              mb: 4,
              userSelect: 'text',
              lineHeight: 1.5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Connect with verified construction professionals, explore portfolios, and bring your vision to life with confidence.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: { xs: 'center', md: 'flex-start' },
              flexWrap: 'wrap',
            }}
          >
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.6,
                fontWeight: 700,
                borderRadius: 4,
                backgroundColor: '#1e90ff',
                boxShadow: '0 8px 30px rgba(30,144,255,0.6)',
                '&:hover': {
                  backgroundColor: '#0b61d1',
                  boxShadow: '0 0 20px 4px rgba(30,144,255,0.8)',
                  transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
                },
                transition: 'all 0.3s ease',
                userSelect: 'none',
              }}
              aria-label="Get Started"
            >
              Get Started
            </Button>

            <Button
              component={Link}
              href="/about"
              variant="outlined"
              size="large"
              sx={{
                px: 5,
                py: 1.6,
                fontWeight: 700,
                borderRadius: 4,
                borderColor: 'rgba(255,255,255,0.7)',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderColor: '#fff',
                },
                transition: 'all 0.3s ease',
              }}
              aria-label="Learn More"
            >
              Learn More
            </Button>
          </Box>
        </motion.div>

        {/* Right Lottie Animation */}
        <motion.div
          style={{
            flex: 1,
            maxWidth: 480,
            height: 320,
            pointerEvents: 'none',
            userSelect: 'none',
            transform: `translate3d(${lottieTranslateX}px, ${lottieTranslateY}px, 0)`,
            transition: 'transform 0.1s ease-out',
          }}
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeInUpVariants}
        >
          {animationData ? (
            <AnimatedLottieWrapper>
              <Lottie
                animationData={animationData as object}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </AnimatedLottieWrapper>
          ) : (
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', mt: 8 }}>
              Loading animation...
            </Typography>
          )}
        </motion.div>
      </Container>

      {/* Scroll down arrow */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.7)',
          fontSize: 32,
          userSelect: 'none',
          zIndex: 20,
          cursor: 'pointer',
        }}
        variants={bounceArrowVariants}
        animate="animate"
        onClick={() => {
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }}
        role="button"
        tabIndex={0}
        aria-label="Scroll down"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        ↓
      </motion.div>
    </Box>
  );
}
