const React = require('react');

class Pricing extends React.Component {

  render() {
    return (
      <div className="lg:px-36 md:px-16 sm:px-7 px-6" id="pricing">
        <div>
            <div className="flex flex-col justify-center items-center mb-20">
                <h3 className="font-bold sm:text-lg text-base text-purple-100 mb-px"> Pricing </h3>
                <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center"> Choose Your Favorite Plan</h2>
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
                            <div className="text-black-200 text-4xl leading-2xl font-semibold">
                              Free
                            </div>
                            <div className="w-10 h-10 bg-black-200 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-4 h-4">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                              </svg>
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-2xl text-black-200 font-semibold">Basic</span>
                            <span className="text-base text-gray-100 font-medium">Everything you need to get you started</span>
                        </div>
                        <div className="flex flex-col space-y-5 mb-7">

                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    Up to <span className="font-bold">10,000 </span>views/month </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">10 </span>Websites </span>
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
                            <div className="text-black-200 text-5xl leading-2xl font-semibold"> $8<span className="text-lg">/month</span>
                            </div>
                            <div className="w-10 h-10 bg-black-200 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-4 h-4">
                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                              </svg>
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-2xl text-black-200 font-semibold">Premium</span>
                            <span className="text-base text-gray-100 font-medium">Work together on growing your business</span>
                        </div>
                        <div className="flex flex-col space-y-5 mb-7">

                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                  Up to  <span className="font-bold">100,000 </span>views/month </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>
                                    <span className="font-bold">100 </span>Websites </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Priority support</span>
                            </span>
                        </div>
                    </div>
                    <a href="https://app.nepcha.com/user/account/settings" className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
                       Start now
                    </a>
                </div>
                <div className="border border-gray-300 bg-white-100 hover:drop-shadow shadow-black-300 px-5 rounded-md flex flex-col justify-between xl:w-[29%]">
                    <div className="mt-2.5">
                        <div className="flex justify-between items-center mb-3">
                            <div className="text-black-200 text-3xl leading-2xl font-semibold">
                            Contact Us
                            </div>
                            <div className="w-10 h-10 bg-black-200 rounded-lg flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-4 h-4">
                                <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                              </svg>
                            </div>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className="text-2xl text-black-200 font-semibold">Enterprise</span>
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
                                    <span className="font-bold">100+ </span>Websites </span>
                            </span>
                            <span className="inline-flex text-gray-100 text-base font-noto font-medium">
                                <img src="/img/checkmark.svg" className="mr-2" />
                                <span>Priority support</span>
                            </span>

                        </div>
                    </div>
                    <a href="mailto:hello@nepcha.com" className="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-black-200 hover:shadow-black-200 text-sm mb-5">
                        Contact Us
                    </a>
                </div>

            </div>
        </div>
    </div>

    )
  }
}

export default Pricing;
