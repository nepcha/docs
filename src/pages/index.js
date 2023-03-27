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

    <div className="w-full max-w-screen-3xl overflow-hidden z-10 tailwind-layout">
       <Header />
        <FeaturesSection />
        <Screens />
        <Banner />
        <Testimonials />
        <Pricing />
        <FaqSection />
        <Footer />
    </div>
    );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Nepcha Analytics is a privacy-focused analytics tool for companies & startups."
      wrapperClassName={'tailwind-layout'}
    >
        <main>
        <LandingContent />
        </main>
    </Layout>
  );
}
