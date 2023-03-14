import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import FaqSection from "../components/FaqSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

function LandingContent() {
    const { siteConfig } = useDocusaurusContext();

    return (

    <div className="w-full max-w-screen-3xl sm:mt-10 mt-10 overflow-hidden z-10 tailwind-layout bg-white-200">
        <img src="/img/header-shadow.svg" className="absolute z-0 right-0 top-0 pointer-events-none" />
        <div className="lg:px-36 md:px-16 sm:px-7 px-3">
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
                            <a href="#" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-purple-100 hover:shadow-purple-100 mr-4 md:mb-0 mb-4 text-sm w-32">
                                Demo Data
                            </a>
                            <a href="https://app.nepcha.com/register" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm w-32">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:h-[550px] sm:w-1/3 w-4/5 bg-synops bg-no-repeat bg-contain sm:bg-right bg-center sm-max:h-52 sm-max:absolute sm-max:right-0 sm-max:opacity-30 sm-max:translate-x-[35%] sm-max:-translate-y-[30%]"></div>
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
                        <button className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm w-32">
                            Get Started

                        </button>
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
                <button className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg sm:w-32 sm:text-xs w-28 text-[10px] mt-4 bg-white-100/20 hover:bg-white-100/40 border border-white-100/40">
                    Free Signup

                </button>
            </div>
            <div className="bg-sidegoalconversion bg-no-repeat bg-center flex justify-center items-center xl:w-2/5 w-2/4">
                <img src="/img/logoWhite.png" className="w-32 h-32" />
            </div>
        </div>
    </div>


    <div className="lg:px-36 md:px-16 sm:px-7 px-6 lg:mt-40 mt-28 lg:pb-40 pb-28 bg-customers bg-customerSize bg-no-repeat bg-customerPosition">
        <div>
            <div className="flex flex-col justify-center items-center mb-20">
                <h3 className="font-bold sm:text-lg text-base text-purple-100 mb-px"> What our customers say </h3>
                <h2 className="max-w-[860px] font-extrabold lg:text-5xl md:text-3xl sm:text-2xl text-xl lg:leading-xl text-gray-200 text-center"> Why freelancers, startups, companies and governments love us </h2>
            </div>
            <div className="flex lg:justify-between lg:space-x-4 lg:flex-row flex-col lg:space-y-0 space-y-7 items-center">

                <div className="border border-white-100 bg-white-100/80 drop-shadow-md hover:drop-shadow-lg shadow-black-200 hover:shadow-black-200 pl-6 pr-3 sm:w-96 rounded-md">
                    <div className="flex mt-6 space-x-3">
                        <div className="bg-firstCustomer w-12 h-12 rounded-lg bg-cover bg-no-repeat"></div>
                        <div className="flex flex-col text-black-200 text-sm font-semibold">
                            <h4 class="mb-1">Eugen Tudorache</h4>
                            <span>CTO @ UPDIVISION</span>
                        </div>
                    </div>
                    <p className="font-noto text-sm leading-6 text-gray-100 mt-5">Our Web Development Agency is releasing yearly hundred of sites and apps for our clients. We are always looking to provide to our users the latest technologies and we found in Nepcha a strong tool for Website Data Analytics.</p>
                    <div className="inline-flex space-x-2 mt-4 mb-5">

                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />

                    </div>
                </div>
                <div className="border border-white-100 bg-white-100/80 drop-shadow-md hover:drop-shadow-lg shadow-black-200 hover:shadow-black-200 pl-6 pr-3 sm:w-96 rounded-md">
                    <div className="flex mt-6 space-x-3">
                        <div className="bg-secondCustomer w-12 h-12 rounded-lg bg-cover bg-no-repeat"></div>
                        <div className="flex flex-col text-black-200 text-sm font-semibold">
                            <h4 class="mb-1">Alexandru Paduraru</h4>
                            <span>CEO @ Creative Tim</span>
                        </div>
                    </div>
                    <p className="font-noto text-sm leading-6 text-gray-100 mt-5">At Creative Tim we deliver UI Tools like Admin Dashboards and UI Kits for over 2.1 million developers around the world. To make the best decisions you need trustworthy data sources, that's why we decided to switch to Nepcha.</p>
                    <div className="inline-flex space-x-2 mt-4 mb-5">

                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />

                    </div>
                </div>
                <div className="border border-white-100 bg-white-100/80 drop-shadow-md hover:drop-shadow-lg shadow-black-200 hover:shadow-black-200 pl-6 pr-3 sm:w-96 rounded-md">
                    <div className="flex mt-6 space-x-3">
                        <div className="bg-thirdCustomer w-12 h-12 rounded-lg bg-cover bg-no-repeat"></div>
                        <div className="flex flex-col text-black-200 text-sm font-semibold">
                            <h4 class="mb-1">Rares Toma</h4>
                            <span>CEO @ Loopple Technologies</span>
                        </div>
                    </div>
                    <p className="font-noto text-sm leading-6 text-gray-100 mt-5">We are building one of the most complex Low Code/No Code editor in browser. Nepcha was one of the most beautiful and simple Analytics Tool that we wanted to offer to our customers and we are very happy with the decision.</p>
                    <div className="inline-flex space-x-2 mt-4 mb-5">

                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />
                        <img src="/img/feedbackStar.svg" />

                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="lg:px-36 md:px-16 sm:px-7 px-6" id="pricing">
        <div>
            <div className="flex flex-col justify-center items-center mb-20">
                <h3 className="font-bold sm:text-lg text-base text-purple-100 mb-px"> Pricing </h3>
                <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center"> Choose Your Favorite Plan (coming soon) </h2>
                <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8">Join thousands of people who base their decisions on Nepcha Analytics.</p>
                {/* <div>
                    <nav>
                        <ul role="tablist" className="flex relative bg-white-100 bg-opacity-60 rounded-lg p-2 border border-gray-300">

                            <li role="tab" className="text-white-100 grid text-center font-roboto font-bold relative bg-transparent p-1 antialiased text-sm select-none cursor-pointer">
                                <div className="z-20 sm:px-8 sm:py-2.5 p-2">Monthly Billing</div>
                                <div className="origin-[50%_50%] transform-none absolute top-0 left-0 right-0 z-10 h-full bg-black-200 rounded-md shadow"></div>
                            </li>
                            <li role="tab" className="text-black-200 grid text-center font-roboto font-bold relative bg-transparent p-1 antialiased text-sm select-none cursor-pointer">
                                <div className="z-20 sm:px-8 sm:py-2.5 p-2">Yearly Billing</div>
                            </li>

                        </ul>
                    </nav>
                </div> */}
            </div>
            <div className="hidden flex lg:justify-between lg:space-x-4 lg:space-y-0 space-y-7 lg:flex-row flex-col mb-20">

                <div className="border border-gray-300 bg-white-100 hover:drop-shadow shadow-black-300 px-5 rounded-md flex flex-col justify-between xl:w-[29%]">
                    <div className="mt-2.5">
                        <div className="flex justify-between items-center mb-3">
                            <div className="text-black-200 text-5xl leading-2xl font-semibold"> $9 <span className="text-lg">/month</span>
                            </div>
                            <div className="w-10 h-10 bg-black-200 rounded-lg flex items-center justify-center">
                                <img src="/img/user.64f47a7e.svg" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-2xl text-black-200 font-semibold">Starter</span>
                            <span className="text-base text-gray-100 font-medium">Everything you need to get you started</span>
                        </div>
                        <div className="flex flex-col space-y-5 mb-7">

                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">100,000 </span>views/month </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">1 </span>User </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">10 </span>Websites </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Events and campaigns</span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Aggregated export</span>
                            </span>

                        </div>
                    </div>
                    <a href="https://app.nepcha.com/register">
                        <button className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
        Get Started

                        </button>
                    </a>
                </div>
                <div className="border border-gray-300 bg-white-100 hover:drop-shadow shadow-black-300 px-5 rounded-md flex flex-col justify-between xl:w-[29%]">
                    <div className="mt-2.5">
                        <div className="flex justify-between items-center mb-3">
                            <div className="text-black-200 text-5xl leading-2xl font-semibold"> $49 <span className="text-lg">/month</span>
                            </div>
                            <div className="w-10 h-10 bg-black-200 rounded-lg flex items-center justify-center">
                                <img src="/img/users.b67fc147.svg" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-2xl text-black-200 font-semibold">Starter</span>
                            <span className="text-base text-gray-100 font-medium">Work together on growing your business</span>
                        </div>
                        <div className="flex flex-col space-y-5 mb-7">

                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">1,000,000 </span>views/month </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">10 </span>User </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">100 </span>Websites </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Events and campaigns</span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Aggregated export</span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Raw level export</span>
                            </span>

                        </div>
                    </div>
                    <a href="https://app.nepcha.com/register">
                        <button className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
        Get Started

                        </button>
                    </a>
                </div>
                <div className="border border-gray-300 bg-white-100 hover:drop-shadow shadow-black-300 px-5 rounded-md flex flex-col justify-between xl:w-[29%]">
                    <div className="mt-2.5">
                        <div className="flex justify-between items-center mb-3">
                            <div className="text-black-200 text-5xl leading-2xl font-semibold"> $89 <span className="text-lg">/month</span>
                            </div>
                            <div className="w-10 h-10 bg-black-200 rounded-lg flex items-center justify-center">
                                <img src="/img/briefcase.fb03da93.svg" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-2xl text-black-200 font-semibold">Starter</span>
                            <span className="text-base text-gray-100 font-medium">Get everything needed to grow your business</span>
                        </div>
                        <div className="flex flex-col space-y-5 mb-7">

                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">1,000,000+ </span>views/month </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">10+ </span>User </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">100+ </span>Websites </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Events and campaigns</span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Aggregated export</span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Raw level export</span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Priority support</span>
                            </span>

                        </div>
                    </div>
                    <a href="https://app.nepcha.com/register">
                        <button className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
        Get Started

                        </button>
                    </a>
                </div>

            </div>
            <div>
                <div className="hidden sm:rounded-lg">
                    <table className="w-full text-gray-500 sm-max:table-fixed">
                        <thead className="text-black-200 text-base sm-max:text-xs leading-8 text-">
                            <tr>

                                <th scope="col" className="text-left py-3 sm:px-6 sm-max:w-1/4">Features</th>
                                <th scope="col" className="py-3 sm:px-6 sm-max:w-1/4">Starter</th>
                                <th scope="col" className="py-3 sm:px-6 sm-max:w-1/4">Business</th>
                                <th scope="col" className="py-3 sm:px-6 sm-max:w-1/4">Company</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr className="bg-blue-100 bg-opacity-[0.02] bg-blue-100 bg-opacity-[0.02] text-gray-100 font-roboto">
                                <th scope="row" className="py-6 sm:px-6 font-medium sm:whitespace-nowrap text-left sm-max:text-xs">Documentation</th>


                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>

                            </tr>
                            <tr className="bg-white-200 bg-blue-100 bg-opacity-[0.02] text-gray-100 font-roboto">
                                <th scope="row" className="py-6 sm:px-6 font-medium sm:whitespace-nowrap text-left sm-max:text-xs">Documentation</th>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAESklEQVRoBe1ZW08TQRT2wRhjjE9Gf4DREF+N0X9jNBgQowFRIIAKkWgBbVra0nIpUAq0pS1sWWkpoayKFB58UYPxUSUm6h/AyKXmQ5vMnkx3d7a7MZiSbDo7e84355yZOTcOHar8VSxQsUDZFpie3jgSS+WuB8Jzi92+yNdWx9DPW+2evZrmZwU8GGMO30ATlXLViqIcLnvhcgES8yuX+sdSa42d/TvVd3sLIk9jp3/HNyatJTMvLpYrhzC/nM1XuYaTH2qbnUJC8xQEhns4sTGztHJOWBAzDOPxBe/t+549njDlzAEzFM/2mZHJEI8svznmGop/LCXkzVb33lN/9NNoNDMeSylXsEvg2X+y+aqolLuKb72B2GfQlsJxBxMb4DEklFEiWVZOPvGEf/AWvdPh2w1G5qdAI4I3Ek2Hmh8P/OJhOryT30XwNNeFNXjC17Y4C4HwXG4mu3pKE0DjI7AHJ+U0sKgif5SwYCd4x6ahw7cLt6khm9CnqLRU0/DQu0uVwOUWAqLEoXjWR0HbHMNbcJ+Uttz3ZPr1ZWDT9UKJRZcp7IT88mz9A4/KKrCSHcIXBYQSdCfgnUy5WPh51ho3WpwFK49NUWj6G0kptfROuIPJ95RO8x1WpkEKF1aTycKPAxNyljUeFBKK2EgPWAC4ynK8jahu04pyvKlL7WKRdhjCQWJGcxv4eUPMFhKNxDJh1ojInQwlgDjnLCOipmVBRUBB7DiN2IjmuhBId1kFkB7oMtlE0OuPfmFlGZyQF3SXQs7OMiF/0WWyiWA0mplgZenxxzZ1l0LhwTIhMdNlsokgllq+xsrS1h3c0l2KpsqlgggLbMWYJ5iUfnWexUZg5dGp5qj/h0tTEfx9YYGtGPPWSKfXT7DYiAc8OtXcgVfgwB8heokN+V7VHlr3gu4Fe4QMXeID70ZpIoUa1jqbiiH1+COb7A6getNFoNv2r1KJ1NL66bpWl6rUNBSTkDAhcWI1RwGuq7nFBDSZu/fIv20omYMcSF1ZBdA9sLzVoaEw/H9TV2CblcEXkvIaLOpPKB5oPDB0/tQwpt9oQokANvt85YIQIDoCrAUAgu6BEIgJ4ilpuY4ary+YfCsMNZtePcMr6lF4C4MZZLC0qMea6FWyu4AxWh92KAFMGkSx3ng86zSoP58MvUqqBFof6B7wOcRncWzqOY2tvuDMO3E0wgHvgzYfVQJ3AkGvVLZKYLiv4MWFpWceazm8U98URTnKZRSdRE3MUwILoXsAny3StUCQAg91lUUjQXjL63DsBPVMxQXxi4iNGhZlICopFCOwMB6MMYfuBtIDGmFZHBwbyyzP2yn0Kql3YgUwO8YdKPvC8gTmzaFvinYf7oFZgYt8wICfh9vmrWXrHKIj0g6aOxWF0/rd/ydfSMoLR1g7NEKShcIHfRu0PlB4oLKDd8GDcXt3cAvfkJIgqzScmNkhcAWzYoH/yAK/AWpaXOSiQjejAAAAAElFTkSuQmCC" className="sm:w-5 sm:h-5 w-4 h-4" / >
                                    </span>
                                </td>

                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>

                            </tr>
                            <tr className="bg-blue-100 bg-opacity-[0.02] bg-blue-100 bg-opacity-[0.02] text-gray-100 font-roboto">
                                <th scope="row" className="py-6 sm:px-6 font-medium sm:whitespace-nowrap text-left sm-max:text-xs">Documentation</th>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAESklEQVRoBe1ZW08TQRT2wRhjjE9Gf4DREF+N0X9jNBgQowFRIIAKkWgBbVra0nIpUAq0pS1sWWkpoayKFB58UYPxUSUm6h/AyKXmQ5vMnkx3d7a7MZiSbDo7e84355yZOTcOHar8VSxQsUDZFpie3jgSS+WuB8Jzi92+yNdWx9DPW+2evZrmZwU8GGMO30ATlXLViqIcLnvhcgES8yuX+sdSa42d/TvVd3sLIk9jp3/HNyatJTMvLpYrhzC/nM1XuYaTH2qbnUJC8xQEhns4sTGztHJOWBAzDOPxBe/t+549njDlzAEzFM/2mZHJEI8svznmGop/LCXkzVb33lN/9NNoNDMeSylXsEvg2X+y+aqolLuKb72B2GfQlsJxBxMb4DEklFEiWVZOPvGEf/AWvdPh2w1G5qdAI4I3Ek2Hmh8P/OJhOryT30XwNNeFNXjC17Y4C4HwXG4mu3pKE0DjI7AHJ+U0sKgif5SwYCd4x6ahw7cLt6khm9CnqLRU0/DQu0uVwOUWAqLEoXjWR0HbHMNbcJ+Uttz3ZPr1ZWDT9UKJRZcp7IT88mz9A4/KKrCSHcIXBYQSdCfgnUy5WPh51ho3WpwFK49NUWj6G0kptfROuIPJ95RO8x1WpkEKF1aTycKPAxNyljUeFBKK2EgPWAC4ynK8jahu04pyvKlL7WKRdhjCQWJGcxv4eUPMFhKNxDJh1ojInQwlgDjnLCOipmVBRUBB7DiN2IjmuhBId1kFkB7oMtlE0OuPfmFlGZyQF3SXQs7OMiF/0WWyiWA0mplgZenxxzZ1l0LhwTIhMdNlsokgllq+xsrS1h3c0l2KpsqlgggLbMWYJ5iUfnWexUZg5dGp5qj/h0tTEfx9YYGtGPPWSKfXT7DYiAc8OtXcgVfgwB8heokN+V7VHlr3gu4Fe4QMXeID70ZpIoUa1jqbiiH1+COb7A6getNFoNv2r1KJ1NL66bpWl6rUNBSTkDAhcWI1RwGuq7nFBDSZu/fIv20omYMcSF1ZBdA9sLzVoaEw/H9TV2CblcEXkvIaLOpPKB5oPDB0/tQwpt9oQokANvt85YIQIDoCrAUAgu6BEIgJ4ilpuY4ary+YfCsMNZtePcMr6lF4C4MZZLC0qMea6FWyu4AxWh92KAFMGkSx3ng86zSoP58MvUqqBFof6B7wOcRncWzqOY2tvuDMO3E0wgHvgzYfVQJ3AkGvVLZKYLiv4MWFpWceazm8U98URTnKZRSdRE3MUwILoXsAny3StUCQAg91lUUjQXjL63DsBPVMxQXxi4iNGhZlICopFCOwMB6MMYfuBtIDGmFZHBwbyyzP2yn0Kql3YgUwO8YdKPvC8gTmzaFvinYf7oFZgYt8wICfh9vmrWXrHKIj0g6aOxWF0/rd/ydfSMoLR1g7NEKShcIHfRu0PlB4oLKDd8GDcXt3cAvfkJIgqzScmNkhcAWzYoH/yAK/AWpaXOSiQjejAAAAAElFTkSuQmCC" className="sm:w-5 sm:h-5 w-4 h-4" />
                                    </span>
                                </td>

                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>

                            </tr>
                            <tr className="bg-white-200 bg-blue-100 bg-opacity-[0.02] text-gray-100 font-roboto">
                                <th scope="row" className="py-6 sm:px-6 font-medium sm:whitespace-nowrap text-left sm-max:text-xs">Documentation</th>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAESklEQVRoBe1ZW08TQRT2wRhjjE9Gf4DREF+N0X9jNBgQowFRIIAKkWgBbVra0nIpUAq0pS1sWWkpoayKFB58UYPxUSUm6h/AyKXmQ5vMnkx3d7a7MZiSbDo7e84355yZOTcOHar8VSxQsUDZFpie3jgSS+WuB8Jzi92+yNdWx9DPW+2evZrmZwU8GGMO30ATlXLViqIcLnvhcgES8yuX+sdSa42d/TvVd3sLIk9jp3/HNyatJTMvLpYrhzC/nM1XuYaTH2qbnUJC8xQEhns4sTGztHJOWBAzDOPxBe/t+549njDlzAEzFM/2mZHJEI8svznmGop/LCXkzVb33lN/9NNoNDMeSylXsEvg2X+y+aqolLuKb72B2GfQlsJxBxMb4DEklFEiWVZOPvGEf/AWvdPh2w1G5qdAI4I3Ek2Hmh8P/OJhOryT30XwNNeFNXjC17Y4C4HwXG4mu3pKE0DjI7AHJ+U0sKgif5SwYCd4x6ahw7cLt6khm9CnqLRU0/DQu0uVwOUWAqLEoXjWR0HbHMNbcJ+Uttz3ZPr1ZWDT9UKJRZcp7IT88mz9A4/KKrCSHcIXBYQSdCfgnUy5WPh51ho3WpwFK49NUWj6G0kptfROuIPJ95RO8x1WpkEKF1aTycKPAxNyljUeFBKK2EgPWAC4ynK8jahu04pyvKlL7WKRdhjCQWJGcxv4eUPMFhKNxDJh1ojInQwlgDjnLCOipmVBRUBB7DiN2IjmuhBId1kFkB7oMtlE0OuPfmFlGZyQF3SXQs7OMiF/0WWyiWA0mplgZenxxzZ1l0LhwTIhMdNlsokgllq+xsrS1h3c0l2KpsqlgggLbMWYJ5iUfnWexUZg5dGp5qj/h0tTEfx9YYGtGPPWSKfXT7DYiAc8OtXcgVfgwB8heokN+V7VHlr3gu4Fe4QMXeID70ZpIoUa1jqbiiH1+COb7A6getNFoNv2r1KJ1NL66bpWl6rUNBSTkDAhcWI1RwGuq7nFBDSZu/fIv20omYMcSF1ZBdA9sLzVoaEw/H9TV2CblcEXkvIaLOpPKB5oPDB0/tQwpt9oQokANvt85YIQIDoCrAUAgu6BEIgJ4ilpuY4ary+YfCsMNZtePcMr6lF4C4MZZLC0qMea6FWyu4AxWh92KAFMGkSx3ng86zSoP58MvUqqBFof6B7wOcRncWzqOY2tvuDMO3E0wgHvgzYfVQJ3AkGvVLZKYLiv4MWFpWceazm8U98URTnKZRSdRE3MUwILoXsAny3StUCQAg91lUUjQXjL63DsBPVMxQXxi4iNGhZlICopFCOwMB6MMYfuBtIDGmFZHBwbyyzP2yn0Kql3YgUwO8YdKPvC8gTmzaFvinYf7oFZgYt8wICfh9vmrWXrHKIj0g6aOxWF0/rd/ydfSMoLR1g7NEKShcIHfRu0PlB4oLKDd8GDcXt3cAvfkJIgqzScmNkhcAWzYoH/yAK/AWpaXOSiQjejAAAAAElFTkSuQmCC" className="sm:w-5 sm:h-5 w-4 h-4" />
                                    </span>
                                </td>

                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>

                            </tr>
                            <tr className="bg-blue-100 bg-opacity-[0.02] bg-blue-100 bg-opacity-[0.02] text-gray-100 font-roboto">
                                <th scope="row" className="py-6 sm:px-6 font-medium sm:whitespace-nowrap text-left sm-max:text-xs">Documentation</th>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAESklEQVRoBe1ZW08TQRT2wRhjjE9Gf4DREF+N0X9jNBgQowFRIIAKkWgBbVra0nIpUAq0pS1sWWkpoayKFB58UYPxUSUm6h/AyKXmQ5vMnkx3d7a7MZiSbDo7e84355yZOTcOHar8VSxQsUDZFpie3jgSS+WuB8Jzi92+yNdWx9DPW+2evZrmZwU8GGMO30ATlXLViqIcLnvhcgES8yuX+sdSa42d/TvVd3sLIk9jp3/HNyatJTMvLpYrhzC/nM1XuYaTH2qbnUJC8xQEhns4sTGztHJOWBAzDOPxBe/t+549njDlzAEzFM/2mZHJEI8svznmGop/LCXkzVb33lN/9NNoNDMeSylXsEvg2X+y+aqolLuKb72B2GfQlsJxBxMb4DEklFEiWVZOPvGEf/AWvdPh2w1G5qdAI4I3Ek2Hmh8P/OJhOryT30XwNNeFNXjC17Y4C4HwXG4mu3pKE0DjI7AHJ+U0sKgif5SwYCd4x6ahw7cLt6khm9CnqLRU0/DQu0uVwOUWAqLEoXjWR0HbHMNbcJ+Uttz3ZPr1ZWDT9UKJRZcp7IT88mz9A4/KKrCSHcIXBYQSdCfgnUy5WPh51ho3WpwFK49NUWj6G0kptfROuIPJ95RO8x1WpkEKF1aTycKPAxNyljUeFBKK2EgPWAC4ynK8jahu04pyvKlL7WKRdhjCQWJGcxv4eUPMFhKNxDJh1ojInQwlgDjnLCOipmVBRUBB7DiN2IjmuhBId1kFkB7oMtlE0OuPfmFlGZyQF3SXQs7OMiF/0WWyiWA0mplgZenxxzZ1l0LhwTIhMdNlsokgllq+xsrS1h3c0l2KpsqlgggLbMWYJ5iUfnWexUZg5dGp5qj/h0tTEfx9YYGtGPPWSKfXT7DYiAc8OtXcgVfgwB8heokN+V7VHlr3gu4Fe4QMXeID70ZpIoUa1jqbiiH1+COb7A6getNFoNv2r1KJ1NL66bpWl6rUNBSTkDAhcWI1RwGuq7nFBDSZu/fIv20omYMcSF1ZBdA9sLzVoaEw/H9TV2CblcEXkvIaLOpPKB5oPDB0/tQwpt9oQokANvt85YIQIDoCrAUAgu6BEIgJ4ilpuY4ary+YfCsMNZtePcMr6lF4C4MZZLC0qMea6FWyu4AxWh92KAFMGkSx3ng86zSoP58MvUqqBFof6B7wOcRncWzqOY2tvuDMO3E0wgHvgzYfVQJ3AkGvVLZKYLiv4MWFpWceazm8U98URTnKZRSdRE3MUwILoXsAny3StUCQAg91lUUjQXjL63DsBPVMxQXxi4iNGhZlICopFCOwMB6MMYfuBtIDGmFZHBwbyyzP2yn0Kql3YgUwO8YdKPvC8gTmzaFvinYf7oFZgYt8wICfh9vmrWXrHKIj0g6aOxWF0/rd/ydfSMoLR1g7NEKShcIHfRu0PlB4oLKDd8GDcXt3cAvfkJIgqzScmNkhcAWzYoH/yAK/AWpaXOSiQjejAAAAAElFTkSuQmCC" className="sm:w-5 sm:h-5 w-4 h-4" />
                                    </span>
                                </td>

                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>
                                <td className="py-6 sm:px-6 px-4">
                                    <span className="flex justify-center">
                                        <img src="/img/checkmark.svg" className="sm-max:w-4" />
                                    </span>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

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
