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

function LandingContent() {
    const { siteConfig } = useDocusaurusContext();

    return (

    <div className="w-full max-w-screen-3xl overflow-hidden z-10 tailwind-layout">
        <img src="/img/header-shadow.svg" className="absolute z-0 right-0 top-0 pointer-events-none" />
        <div className="lg:px-36 md:px-14 sm:px-7 px-3">
            <div className="flex sm:mt-28 sm-max:mt-16 justify-between sm:flex-row flex-col sm-max:items-center sm-max:relative">
                <div className="sm:w-1/2 w-4/5 sm-max:mb-7 sm-max:z-10 lg:flex lg:flex-col lg:justify-center">
                    <div className="2xl:text-5xl xl:text-4xl xl:leading-md md:text-3xl sm:text-2xl text-xl 2xl:max-w-lg md:w-full xl:max-w-sm md:max-w-xs">
                        <h2 className="text-purple-100 font-bold mb-0">
                        Nepcha Analytics
                        </h2>
                        <h1 className="text-gray-200 dark:text-white font-bold mb-1">A privacy-focused analytics tool for companies & startups.</h1>
                    </div>
                    <div>
                        <p className="text-gray-100 md:text-lg sm:text-base text-lg font-noto xl:w-[70%] mt-3"> This solution ensures compliance with the GDPR, by not using cookies to track visitors. European data is stored in European cloud infrastructure, USA data is stored in USA cloud infrastructure. </p>
                        <div className="mt-6">
                            <a href="https://app.nepcha.com/nepcha.com" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-purple-100 hover:shadow-purple-100 mr-4 md:mb-0 mb-4 text-sm w-32" target="_blank">
                                Demo Data
                            </a>
                            <a href="https://app.nepcha.com/register" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm w-32">
                                Signup
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:h-[550px] md:w-2/3 sm:w-1/3 w-4/5 sm:bg-right sm-max:h-52 sm-max:absolute sm-max:right-0 sm-max:opacity-30 sm-max:translate-x-[35%] sm-max:-translate-y-[20%] flex items-center">
                  <img src="/img/laptop.png" class="w-100" alt="laptop-nepcha"/>
                </div>
            </div>
        </div>

    <FeaturesSection />


    <div className="lg:mt-40 mt-24">
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse mb-40">
            <div className="lg:pl-36 lg:!pr-0 lg:w-2/5 sm:w-3/4 w-11/12 md:px-16 sm:px-7 px-3">
                <h3 className="sm:text-lg text-base text-purple-100 font-bold mb-0">
                    2 Minutes Setup
                </h3>
                <h2 className="xl:w-10/12 text-gray-200 lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-md font-extrabold mb-3">
                    Essential traffic data in real-time
                </h2>
                <p className="xl:w-10/12 font-noto sm:text-lg text-sm text-gray-100 mb-7">
                    Observe your visitors updating in real-time and gain insights into user behavior as they navigate your site. Check your top sources of traffic, countries and cities. <br />
                    <br /> Instantly see if your users come from Mobile, Tablet or Computers.
                </p>
                <div>
                </div>
            </div>
            <div className="bg-featureSizeRight bg-center lg:w-1/2 w-full lg:mb-0 mb-5 flex justify-center items-center bg-features">
                <img src="/img/privacy_analytics.png" width="592" className="xl:pr-0 lg:pr-24 xl:w-2/3 lg:w-full w-3/4 xl:ml-0 lg:ml-16" />
            </div>
        </div>
    </div>


    <div className="lg:mt-40 mt-24">
        <div className="lg:flex-row-reverse flex justify-between items-center lg:flex-row flex-col-reverse mb-40">
            <div className="lg:pr-36 lg:!pl-0 lg:w-2/5 sm:w-3/4 w-11/12 md:px-16 sm:px-7 px-3">
                <h3 className="sm:text-lg text-base text-purple-100 font-bold mb-0">
                    30x Smaller Size than Google Analytics
                </h3>
                <h2 className="xl:w-10/12 text-gray-200 lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-md font-extrabold mb-3">
                    Lightweight script and user-friendly setup steps
                </h2>
                <p className="xl:w-10/12 font-noto sm:text-lg text-sm text-gray-100 mb-7">
                    Our script is 30x smaller in size compared to the regular Google Analytics. Your page speed and loading times will not be affected at all. <br />
                    <br /> Our simple installation steps will have your website ready to process data in minutes.
                </p>
                <div>
                    <div>
                        <a href="https://app.nepcha.com/register" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm w-32">
                            Signup
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-featureSizeLeft bg-left lg:bg-repeat-y bg-repeat lg:w-1/2 w-full lg:mb-0 mb-5 flex justify-center items-center bg-features">
                <img src="/img/load_faster.png" width="592" className="xl:pl-0 lg:pl-24 xl:w-2/3 lg:w-full w-3/4" />
            </div>
        </div>
    </div>

    <div className="lg:mt-40 mt-24">
        <div className="flex justify-between items-center lg:flex-row flex-col-reverse mb-40">
            <div className="lg:pl-36 lg:!pr-0 lg:w-2/5 sm:w-3/4 w-11/12 md:px-16 sm:px-7 px-3">
                <h3 className="sm:text-lg text-base text-purple-100 font-bold mb-0">
                    No cookies, no problems
                </h3>
                <h2 className="xl:w-10/12 text-gray-200 lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-md font-extrabold mb-3">
                    No personal data is collected, and the use of cookies is avoided.

                </h2>
                <p className="xl:w-10/12 font-noto sm:text-lg text-sm text-gray-100 mb-7">
                    We've built Nepcha with the end-user in mind. We don't track any personal details and we cannot identify the users. <br />
                    <br /> We respect the privacy and we don't sell data to any 3rd party provider.
                </p>
            </div>
            <div className="bg-featureSizeRight bg-center lg:w-1/2 w-full lg:mb-0 mb-5 flex justify-center items-center bg-features">
                <img src="/img/privacy_analytics.png" width="592" className="xl:pr-0 lg:pr-24 xl:w-2/3 lg:w-full w-3/4 xl:ml-0 lg:ml-16" />
            </div>
        </div>
    </div>



    <div className="lg:px-36 md:px-16 sm:px-7 px-6 lg:mt-40 mt-28">
        <div className="bg-goalconversion bg-cover bg-no-repeat w-full flex rounded-xl">
            <div className="flex flex-col xl:w-3/5 w-2/4 sm:pl-9 pl-4 justify-center pt-6 pb-6">
                <span className="font-noto xl:text-base lg:text-sm text-xs leading-10 font-bold text-white-100">Simple charts &amp; Data Visualisation</span>
                <p className="font-noto xl:text-3xl lg:text-xl sm:text-base text-xs xl:leading-10 font-bold text-white-100 w-5/6 mt-2"> Start tracking up to 10.000 visits on multiple websites for free. Share stats with your team in a beautiful way.</p>
                <a href="https://app.nepcha.com/register" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg sm:w-32 sm:text-xs w-28 text-[10px] mt-4 bg-white-100/20 hover:bg-white-100/40 border border-white-100/40">
                    Free Signup
                </a>
            </div>
            <div className="bg-sidegoalconversion bg-no-repeat bg-center flex justify-center items-center xl:w-2/5 w-2/4">
                <img src="/img/logoWhite.png" className="w-32 h-32" />
            </div>
        </div>
    </div>


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
      description="Description will go into a meta tag in <head />"
      wrapperClassName={'tailwind-layout'}
    >
        <main>
        <LandingContent />
        </main>
    </Layout>
  );
}
