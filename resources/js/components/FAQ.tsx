import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link } from '@inertiajs/react';

const faqItems = [
  {
    question: 'How do I add my business to ProMart?',
    answer:
      "Click 'Register' in the top navigation, fill your business details, upload your portfolio, and our team will verify within 24–48 hours. Once approved, your business becomes searchable on the platform.",
  },
  {
    question: 'Is it free to list my business on ProMart?',
    answer:
      'Yes. Basic listings are free. Premium plans add featured placement, analytics, and priority support—upgrade anytime to boost visibility.',
  },
  {
    question: 'How do I get verified on ProMart?',
    answer:
      'Verification checks your registration docs, licenses, and contact info. Verified businesses get a blue check and rank higher in search.',
  },
  {
    question: 'How does the search functionality work?',
    answer:
      'Clients can filter by location, specialization, rating, availability, and more. Results are optimized for relevance and quality.',
  },
  {
    question: 'Can I advertise my services on ProMart?',
    answer:
      'Yes—banner ads, sponsored listings, and featured placements are available. Contact us for custom packages.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We offer account setup help, profile optimization, technical support, and growth guidance via email, phone, and live chat.',
  },
];

// CSS animation for fadeIn
const fadeInKeyframe = `
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
`;

export default function FAQ() {
  return (
    <>
      {/* Inject fadeIn keyframe styles globally */}
      <style>{fadeInKeyframe}</style>

      <Box
        sx={{
          background: 'var(--background)',
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
          minHeight: '100vh',
          color: 'var(--foreground)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            mb: 3,
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '0.06em',
            textShadow: '0 2px 8px rgba(0,123,255,0.4)',
            color: 'var(--primary)',
          }}
        >
          Frequently Asked <Box component="span" sx={{ color: 'var(--primaryLight)' }}>Questions</Box>
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mb: 10,
            maxWidth: 640,
            mx: 'auto',
            fontWeight: 500,
            fontSize: { xs: 16, md: 18 },
            letterSpacing: '0.02em',
            lineHeight: 1.6,
          }}
        >
          Find answers to common questions about ProMart and how to get the most out of it.
        </Typography>

        {/* FAQ Accordion */}
        <Box maxWidth="900px" mx="auto">
          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              border: '1px solid var(--border)',
              background: 'var(--card)',
            }}
          >
            {faqItems.map((item, index) => (
              <Accordion
                key={item.question}
                disableGutters
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  border: '1px solid var(--border)',
                  background: 'var(--card)',

                  // Fade-in animation with stagger
                  animation: `fadeIn 0.4s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,

                  // Hover effect: lift + shadow + scale
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 12px 28px rgba(0, 123, 255, 0.3)',
                    transform: 'translateY(-8px) scale(1.02)',
                    cursor: 'pointer',
                  },

                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary)' }} />}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                  sx={{
                    cursor: 'pointer',
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                      color: 'var(--primary)',
                      transform: 'rotate(180deg)',
                    },
                    '&:hover': {
                      color: 'var(--primary)',
                    },
                  }}
                >
                  <Typography
                    fontWeight={700}
                    sx={{
                      fontSize: { xs: 17, md: 19 },
                      letterSpacing: '0.02em',
                      textShadow: '0 1px 3px rgba(0,0,0,0.15)',
                      color: 'var(--foreground)',
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  id={`faq-panel-${index}`}
                  sx={{
                    fontSize: { xs: 15, md: 16 },
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Box>

        {/* Still Have Questions Section */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            background: 'var(--secondary)',
            maxWidth: 600,
            mx: 'auto',
            borderRadius: 4,
            border: '1px solid var(--border)',
            boxShadow: '0 10px 25px rgba(30,144,255,0.15)',
          }}
        >
          <Typography
            variant="h5"
            fontWeight={800}
            gutterBottom
            sx={{
              color: 'var(--primary)',
              letterSpacing: '0.06em',
              textShadow: '0 1px 5px rgba(0,123,255,0.6)',
            }}
          >
            Still have questions?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, fontSize: { xs: 16, md: 17 }, letterSpacing: '0.015em' }}
          >
            Our support team is here to help you get the most out of ProMart.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            spacing={3}
          >
            <Button
              component={Link}
              href="/support"
              variant="contained"
              startIcon={<SupportAgentIcon />}
              sx={{
                background: 'var(--primary)',
                textTransform: 'none',
                px: 5,
                py: 1.7,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: 17,
                '&:hover': { backgroundColor: 'oklch(0.35 0 0)' },
                boxShadow: '0 6px 12px rgba(0,123,255,0.4)',
              }}
            >
              Contact Support
            </Button>
            <Button
              component="a"
              href="mailto:support@promart.lk"
              variant="outlined"
              startIcon={<EmailIcon />}
              sx={{
                textTransform: 'none',
                px: 5,
                py: 1.7,
                borderRadius: 3,
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: 17,
                '&:hover': {
                  backgroundColor: 'oklch(0.95 0 0 / .25)',
                  borderColor: 'var(--primary)',
                },
                boxShadow: '0 4px 10px rgba(0,123,255,0.25)',
              }}
            >
              Email Us
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
