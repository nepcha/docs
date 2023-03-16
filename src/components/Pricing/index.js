const React = require('react');

class Pricing extends React.Component {
  
  render() {
    return (
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
            <div className="flex lg:justify-between lg:space-x-4 lg:space-y-0 space-y-7 lg:flex-row flex-col mb-20">

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
                    <a href="https://app.nepcha.com/register" className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
                        Signup
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
                    <a href="https://app.nepcha.com/register" className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
                        Signup
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
                    <a href="https://app.nepcha.com/register" className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
                        Signup
                    </a>
                </div>

            </div>
        </div>
    </div>

    )
  }
}

export default Pricing;