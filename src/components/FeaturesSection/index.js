import React from 'react';

const FeatureList = [
  {
    title: 'Quick and Easy to integrate',
    Svg: require('@site/static/img/settings.svg').default,
    description: (
      <>
       Just one line of code for your website and you're set. No expertise required. Start tracking users in minutes.
      </>
    ),
  },
  {
    title: 'Own and Control your Data',
    Svg: require('@site/static/img/database.svg').default,
    description: (
      <>
       We keep stored information in individual data-centers, and we don't do cross-continent sharing. Full compliant with GDPR, CCPA and PECR.
      </>
    ),
  },
  {
    title: 'Keep your Site Fast',
    Svg: require('@site/static/img/server.svg').default,
    description: (
      <>
        Rest assured, Nepcha's global network and small script size (2KB) keep your site running at top speed.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
      <div className="max-w-[270px]">
        <div className="bg-bgtools bg-contain bg-no-repeat mb-8 h-17 w-17 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Svg role="img" />
            </div>
        </div>
        <div className="flex flex-col">
            <h4 className="font-noto font-bold sm:text-lg text-base text-black-100 2xl:min-w-max">
                {title}
            </h4>
            <p className="font-noto sm:text-base text-sm text-gray-100">
                {description}
            </p>
        </div>
      </div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="lg:my-40 my-28 lg:px-36 md:px-16 sm:px-7 px-5">
      <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center lg:mb-40 mb-28">
              <h3 className="font-semibold sm:text-xl text-base text-purple-100 mb-px"> 
                The Google Analytics Alternative 
              </h3>
              <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center max-w-2xl"> 
                Discover the origin of your users and the pages they visit. 
              </h2>
              <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8 mt-2">
                Gain insights into your sources of traffic. Nepcha is a easy-to-use and open source web analytics. No cookies and fully compliant with GDPR, CCPA and PECR.
              </p>
              <div className="flex justify-center relative w-full">
                  <img src="/img/laptop.png" className="lg:w-2/4 w-3/4 z-[1]" />
                  <img src="/img/background_laptop.svg" className="absolute z-0 lg:-top-12" />
              </div>
          </div>
          <div className="z-3 relative sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col items-center lg:place-items-start sm:place-items-center sm-max:space-y-10 md:gap-10">
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
          </div>
      </div>
    </div>
  );
}
