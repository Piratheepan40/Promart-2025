import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Header from "@/components/Header";
import Hero3D from "@/components/Hero";
import OfferSection from "@/components/OfferSection";
import Mission from "@/components/Mission";
import FeaturedListings from "@/components/FeaturedListings";
import NewsUpdates from "@/components/NewsUpdates";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Fotter";
import { Link } from "@inertiajs/react";


const Welcome: React.FC = () => {
  return (
    <>
      <Header />
      <Hero3D />
      <OfferSection />
      <Mission />
      <FeaturedListings />
      <NewsUpdates />
      <ContactForm />
      <FAQ />
      <Footer />
    </>

  );
};

export default Welcome;
