import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";

const FeatureList = [
  {
    text: "Easy to understand",
    title: "All user insights you need. In a fully-equipped dashboard.",
    Svg: require("@site/static/img/settings.svg").default,
    description: [
      <>
        Get a look at how many people visit your website, where they’re coming
        from (referrals and physical location), what devices they’re using, what
        pages they go on and how long they stay there.
      </>,
      <>
        All of this information is provided in an easy-to-read dashboard that’s
        ready-made for your tracking needs. No need to build a dashboard from
        scratch. All the info you need is right in front of you, and gets
        updated in real time.
      </>,
    ],
  },
  {
    text: "We respect user privacy",
    title: "No personal user data is collected. No more cookies.",
    Svg: require("@site/static/img/database.svg").default,
    description: [
      <>
        Nepcha will track how people use your website and where they’re coming
        from, but it won’t track their personal data or find out exactly who
        they are. All data is kept private and we don’t sell it to 3rd parties.
      </>,
      <>
        We don’t use cookies to get traffic info: this tool is tailored so that
        it only tracks the information we truly need, unlike Google Analytics
        which might invade user privacy. It’s fully GDPR, CCPA and
        PECR-compliant. All data is kept in individual data-centers.
      </>,
    ],
  },
  {
    text: "Just one line of code",
    title: "Quick and easy to set up. Keep loading speed up.",
    Svg: require("@site/static/img/server.svg").default,
    description: [
      <>
        The Nepcha script is 30 times smaller in size than Google Analytics.
        Just add one line of code and you’re good to go: Nepcha will start
        collecting traffic info right away, without slowing down your website.
        Page speed and loading times won’t be affected.
      </>,
      <>
        Add all of your websites to your profile and track all of their traffic
        information in one place. You can track as many as 100 websites or even
        larger-scale platforms with our premium plans.
      </>,
    ],
  },
];

function LandingContent() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div>
      <div className="w-full max-w-screen-3xl overflow-hidden z-10 tailwind-layout mx-auto">
        <Header
          title="A privacy-focused user analytics tool for Open Collective-based websites"
          subtitle="Nepcha Analytics is a GDPR-compliant website visitor tracking
                  tool. European data is stored in European cloud
                  infrastructure, USA data is stored in USA cloud
                  infrastructure."
        />
        <FeaturesSection
          features={FeatureList}
          uptitle="How it works"
          title="Find out if your websites reaches who it should. While keeping their info private."
        />
        <Banner />
        <FaqSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default function OpenCollective() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} - The Privacy-Focused Web Analytics Tool`}
      description="Nepcha is the simplest privacy-focused web analytics tool for companies & startups that works as an alternative for Google Analytics."
      wrapperClassName={"tailwind-layout"}
    >
      <main>
        <LandingContent />
      </main>
    </Layout>
  );
}
