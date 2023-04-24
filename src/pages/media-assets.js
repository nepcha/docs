import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Footer from "../components/Footer";
import LogoSection from "../components/media/LogoSection";
import Header from "../components/media/Header";
import BadgeSection from "../components/media/BadgeSection";

function Content() {
    const { siteConfig } = useDocusaurusContext();
    return (
      <div>
        <div className="w-full max-w-screen-3xl overflow-hidden z-10 tailwind-layout mx-auto">
          <Header />
          <LogoSection />
          <BadgeSection />
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
      title={`Media Assets by ${siteConfig.title} - The Privacy-Focused Web Analytics Tool`}
      description="Nepcha is the simplest privacy-focused web analytics tool for companies & startups that works as an alternative for Google Analytics."
      wrapperClassName={'tailwind-layout'}
    >
        <main>
          <Content />
        </main>
    </Layout>
  );
}
