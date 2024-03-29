import React from 'react'

export default function FaqSection() {
  const [active, setActive] = React.useState(0);

  const items = [
    {
      title: "Why use a Google Analytics Alternative?",
      description: "There are several reasons for using an alternative for Google Analytics and the most important is the fact that Google collects a lot of data about your users and can use them for other purposes - this can look privacy-invasive. Also, Google Analytics is hard to use, difficult to understand, and very slow to load."
    },
    {
      title: "What is a Privacy-Focused web analytics tool?",
      description: "A privacy-focused web analytics tool is a tool that collects website users data while prioritizing user privacy. These tools are designed to minimize the amount of personally identifiable information that is collected, while still providing valuable insights into how people are using a website. For example, Nepcha does not use cookies to track visitors. European data is stored in European cloud infrastructure, USA data is stored in USA cloud infrastructure."
    },
    {
      title: "Why web analytics is important?",
      description: "Web analytics is essential for your online marketing efforts because it provides valuable insights into how people are using your website. By analyzing data such as traffic volume, user behavior, and conversion rates, you can make informed decisions about how to improve the user experience and the marketing strategy of your brand."
    },
    {
      title: "What is Nepcha Analytics?",
      description: "Nepcha is a simple web analytics tool designed to respect your users' privacy and to work as a Google Analytics alternative in the same time."
    },
    {
      title: "Is Nepcha GDPR compliant?",
      description:
        "Nepcha ensures compliance with the GDPR, by not using cookies to track visitors. European data is stored in European cloud infrastructure, USA data is stored in USA cloud infrastructure.",
    },
    {
      title: "What happens if I go over my allowed number of visits?",
      description:
        "We understand the value of your traffic data, and we want to assure you that we will not delete it. In fact, we will keep your data for up to 12 months longer than what your plan allows. This extra time provides you with an opportunity to upgrade and recover your data without worrying about losing it.",
    },
    {
      title: "Is it possible to use one plan for several websites?",
      description:
        "Absolutely. You can connect more websites to a single plan, and they will all share the monthly page views.",
    },
    {
      title: "How many page views are included in the free plan?",
      description:
        "The free plan includes up to 10,000 page views per month. If you require additional page views, please contact us at hello@nepcha.com and we will be happy to discuss pricing options with you."
    }
  ];

  const toggle = (index) => {
    active !== index
    ? setActive(index)
    : setActive(null);
  };

  const FaqItem = ({index, title, description }) => {
    return (
      <div className="block relative w-full max-w-2xl border-b border-b-gray-400">
        <button
          type="button" c
          className="flex justify-between items-center w-full py-4 text-black-200 antialiased text-base font-bold leading-snug select-none transition-colors text-left"
          onClick={() => toggle(index)} >
          {title}
          {active === index ? (
            <span className="w-5 h-5 ml-4">
              <img src="/img/minus.svg" />
            </span>
          ) : (
            <span className="w-5 h-5 ml-4">
              <img src="/img/plus.svg" />
            </span>
          )
        }
        </button>
        {active === index && (
          <div className="overflow-hidden">
            <div className="block w-full py-2 text-gray-100 antialiased font-sans text-base leading-7 mb-4">
              {description}
            </div>
          </div>
         )}
      </div>
    );
  }

  return (
    <div className="lg:px-36 md:px-16 sm:px-7 px-6 lg:mt-40 mt-28">
      <div>
        <div className="flex flex-col justify-center items-center mb-20">
          <h3 className="font-semibold sm:text-xl text-base text-purple-100 mb-px"> FAQs </h3>
          <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 sm-max:text-center"> Frequently Asked Questions </h2>
          <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8">Have Questions? We are here to help, chat to our friendly team via hello@nepcha.com</p>
        </div>
        <div className="flex flex-col items-center">
          {items.map((item, index) => (
            <FaqItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
