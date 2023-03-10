const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <div className="lg:mt-20 mt-14">
        <footer className="lg:px-36 md:px-16 sm:px-7 px-3 bg-gradient-to-r from-blue-200 to-purple-100 flex flex-col">
            <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 justify-between mt-7 mb-16">
                <div>
                    <div className="inline-flex mb-3">
                        <img src="/img/logoFooter.png" className="h-7" />
                    </div>
                    <div className="font-noto text-sm text-white-100 mix-blend-normal opacity-80 sm:w-80 w-11/12"> Nepcha Analytics - A privacy-focused analytics tool for companies &amp; startups. <br />
                        <br /> This solution ensures compliance with the GDPR, by not using cookies to track visitors. European data is stored in European cloud infrastructure, USA data is stored in USA cloud infrastructure.
                    </div>
                    <div className="inline-flex items-center mt-6 space-x-4">

                        <a href="https://twitter.com/NepchaTeam">
                            <img src="/img/social/twitter.svg?sprite" />
                        </a>
                        <a href="https://github.com/nepcha">
                            <img src="/img/social/github.svg?sprite" />
                        </a>

                    </div>
                </div>
                <div className="flex justify-between lg:w-1/4 w-full">
                    <div className="font-noto text-white-100 text-sm">
                        <span className="font-semibold">Company</span>
                        <ul className="list-none mix-blend-normal opacity-80 space-y-2 mt-2 text-white-100">

                            <li>
                                <a className='text-white-100' href="https://nepcha.com/">Nepcha</a>
                            </li>
                            <li>
                                <a className='text-white-100' href="https://github.com/nepcha">Github</a>
                            </li>
                            <li>
                                <a className='text-white-100' href="https://twitter.com/NepchaTeam">Twitter</a>
                            </li>
                            <li>
                                <a className='text-white-100' href="https://github.com/nepcha/docs">Github Docs</a>
                            </li>

                        </ul>
                    </div>
                    <div className="font-noto text-white-100 text-sm">
                        <span className="font-semibold">Legal</span>
                        <ul className="list-none mix-blend-normal opacity-80 space-y-2 mt-2">

                            <li>
                                <a className='text-white-100' href="https://nepcha.com/terms/">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a className='text-white-100' href="https://nepcha.com/terms/privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a className='text-white-100' href="https://nepcha.com/terms/cookie-policy">Cookie Policy</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-white-100 mix-blend-normal opacity-60 text-sm font-noto font-medium flex justify-center mb-6">
                <span>All rights reserved. Copyright © {new Date().getFullYear()} Nepcha Analytics.</span>
            </div>
        </footer>
      </div>
    )
  }
}

module.exports = Footer;
