const React = require('react');

class Screens extends React.Component {
  render() {
    return (
      <>
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
                        <img src="/img/privacy_analytics.png" width="592" className="xl:pr-0 lg:pr-24 xl:w-2/3 lg:w-full w-3/4 xl:ml-0 lg:ml-16" title="user insights web analytics" alt="web analytics tool with user behavior insights" />
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
                        <img src="/img/load_faster.png" width="592" className="xl:pl-0 lg:pl-24 xl:w-2/3 lg:w-full w-3/4" title="user friendly web analytics tool" alt="user friendly web analytics tool" />
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
                        <img src="/img/privacy_analytics.png" width="592" className="xl:pr-0 lg:pr-24 xl:w-2/3 lg:w-full w-3/4 xl:ml-0 lg:ml-16" title="privacy-focused web analytics" alt="privacy-focused web analytics tool preview" />
                    </div>
                </div>
            </div>
          </>
    )
  }
}

export default Screens;
