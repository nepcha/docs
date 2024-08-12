import React, { useEffect } from "react";
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

const FeatureList = [
  {
    title: "Quick and Easy to integrate",
    Svg: require("@site/static/img/settings.svg").default,
    description: (
      <>
        Just one line of code for your website and you're set. No expertise
        required. Start tracking users in minutes.
      </>
    ),
  },
  {
    title: "Own and Control your Data",
    Svg: require("@site/static/img/database.svg").default,
    description: (
      <>
        We keep stored information in individual data-centers, and we don't do
        cross-continent sharing. Full compliant with GDPR, CCPA and PECR.
      </>
    ),
  },
  {
    title: "Keep your Site Fast",
    Svg: require("@site/static/img/server.svg").default,
    description: (
      <>
        Rest assured, Nepcha's global network and small script size (2KB) keep
        your site running at top speed.
      </>
    ),
  },
];

function LandingContent() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div>
      <div className="w-full max-w-screen-3xl overflow-hidden z-10 tailwind-layout mx-auto">
        <Header />
        <FeaturesSection features={FeatureList} subtitle={true} image={true} />
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
      title={`Closure Announcement - Nepcha Analytics`}
      description="Nepcha is the simplest privacy-focused web analytics tool for companies & startups that works as an alternative for Google Analytics."
    >
      <main>
      <div class="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 class="text-3xl font-bold text-red-600 mb-4">Nepcha Analytics is Closing</h1>
        <p class="text-gray-700 mb-6">
            We regret to inform you that Nepcha Analytics, our privacy-focused analytics tool, is closing its operations.
            We sincerely thank you for your support and trust in our solution, which has always been committed to ensuring
            compliance with GDPR and protecting your data privacy.
        </p>
        <p class="text-gray-700 mb-6">
            As of 20 August 2024, we will no longer provide analytics services. Please ensure that you have exported all necessary
            data before this date.
        </p>
        <p class="text-gray-700 mb-6">
            For any further inquiries or support, please contact us at <a href="mailto:support@nepcha.com" class="text-blue-600 underline">support@nepcha.com</a>.
        </p>
        <p class="text-gray-700 font-semibold">
            Thank you for being a part of our journey.
        </p>
    </div>
      </main>
    </Layout>
  );
}
