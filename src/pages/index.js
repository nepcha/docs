import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Banner from "../components/Banner";
import Screens from "../components/Screens";
import Header from "../components/Header";

function LandingContent() {
    const { siteConfig } = useDocusaurusContext();

    return (
      <div>
        <div className="w-full max-w-screen-3xl overflow-hidden z-10 tailwind-layout mx-auto">
         <Header />
          <FeaturesSection />
          <Screens />
          <Banner />
          <Testimonials />
          <Pricing />
          <FaqSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - The Privacy-Focused Web Analytics Tool`}
      description="Nepcha is the simplest privacy-focused web analytics tool for companies & startups that works as an alternative for Google Analytics."
      wrapperClassName={'tailwind-layout'}
    >
        <main>
        <LandingContent />
        </main>
    </Layout>
  );
}
