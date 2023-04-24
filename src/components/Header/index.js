const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <>
      <img src="/img/header-shadow.svg" className="absolute z-0 right-0 top-0 pointer-events-none" />
      <div className="lg:px-36 md:px-14 sm:px-7 px-3">
          <div className="flex sm:mt-28 sm-max:mt-16 justify-between sm:flex-row flex-col sm-max:items-center sm-max:relative">
              <div className="sm:w-1/2 w-4/5 sm-max:mb-7 sm-max:z-10 lg:flex lg:flex-col lg:justify-center">
                  <div className="2xl:text-5xl xl:text-4xl xl:leading-md md:text-3xl sm:text-2xl text-xl 2xl:max-w-lg md:w-full xl:max-w-sm md:max-w-xs">
                      <h1 className="text-purple-100 font-bold mb-0">
                      Nepcha Analytics
                      </h1>
                      <h2 className="text-gray-200 dark:text-white font-bold mb-1">
                        A privacy-focused analytics tool for companies & startups.
                      </h2>
                  </div>
                  <div>
                      <p className="text-gray-100 md:text-lg sm:text-base text-lg font-noto xl:w-[70%] mt-3"> This solution ensures compliance with the GDPR, by not using cookies to track visitors. European data is stored in European cloud infrastructure, USA data is stored in USA cloud infrastructure. </p>
                      <div className="mt-6">
                          <a href="https://nepcha.com/site/nepcha.com" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-purple-100 hover:shadow-purple-100 mr-4 md:mb-0 mb-4 text-sm w-32" target="_blank">
                              Demo Data
                          </a>
                          <a href="https://app.nepcha.com/register" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm w-32">
                              Signup
                          </a>
                      </div>
                  </div>
              </div>
              <div className="lg:w-1/2 lg:h-[550px] md:w-2/3 sm:w-1/3 w-4/5 sm:bg-right sm-max:h-52 sm-max:absolute sm-max:right-0 sm-max:opacity-30 sm-max:translate-x-[35%] sm-max:-translate-y-[20%] flex items-center">
                <img src="/img/laptop.png" class="w-100" title="google web analytics alternative" alt="google web analytics alternative"/>
              </div>
          </div>
      </div>
      </>
    )
  }
}

export default Header;
