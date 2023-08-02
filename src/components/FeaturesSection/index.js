import React from "react";

function Feature({ text, Svg, title, description }) {
  return (
    <div className="max-w-[270px]">
      <div className="bg-bgtools bg-contain bg-no-repeat mb-8 h-17 w-17 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Svg role="img" />
        </div>
      </div>
      <div className="flex flex-col">
        {text && (
          <span className="font-noto font-bold sm:text-lg text-base text-purple-100">
            {text}
          </span>
        )}
        <h4 className="font-noto font-bold sm:text-lg text-base text-black-100">
          {title}
        </h4>
        {typeof description === "object" && description.length > 0 ? (
          <>
            <p className="font-noto sm:text-base text-sm text-gray-100">
              {description[0]}
            </p>
            {description[1] && (
              <p className="font-noto sm:text-base text-sm text-gray-100 mt-4">
                {description[1]}
              </p>
            )}
          </>
        ) : (
          <p className="font-noto sm:text-base text-sm text-gray-100">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function FeaturesSection(props) {
  return (
    <div className="lg:my-40 my-28 lg:px-36 md:px-16 sm:px-7 px-5">
      <div className="flex flex-col">
        <div
          className={`flex flex-col justify-center items-center ${
            props.image && props.subtitle ? "lg:mb-40 mb-28" : "lg:mb-16 mb-10"
          }`}
        >
          <h3 className="font-semibold sm:text-xl text-base text-purple-100 mb-px">
            {props.uptitle ? props.uptitle : "The Google Analytics Alternative"}
          </h3>
          <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center max-w-3xl">
            {props.title
              ? props.title
              : "Discover the origin of your users and the pages they visit."}
          </h2>
          {props.subtitle && (
            <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8 mt-2">
              Gain insights into your sources of traffic. Nepcha is a
              easy-to-use web analytics. No cookies and fully compliant with
              GDPR, CCPA and PECR.
            </p>
          )}
          {props.image && (
            <div className="flex justify-center relative w-full">
              <img
                src="/img/laptop.png"
                className="lg:w-2/4 w-3/4 z-[1]"
                title="simple web analytics tool"
                alt="simple web analytics dashboard"
              />
              <img
                src="/img/background_laptop.svg"
                className="absolute z-0 lg:-top-12"
              />
            </div>
          )}
        </div>
        <div className="z-3 relative sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-col items-center lg:place-items-start sm:place-items-center sm-max:space-y-10 md:gap-10">
          {props.features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
