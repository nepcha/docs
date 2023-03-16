const React = require('react');

class Testimonials extends React.Component {
  
  render() {
    return (
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
                            <h4 className="mb-1">Eugen Tudorache</h4>
                            <span>CTO @ UPDIVISION</span>
                        </div>
                    </div>
                    <p className="font-noto text-sm leading-6 text-gray-100 mt-5">
                        As a web development agency, we launch numerous websites and apps for our clients every year. It's crucial for us to stay updated with cutting-edge technology, and we've discovered Nepcha to be a powerful resource for website data analytics.
                    </p>
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
                            <h4 className="mb-1">Alexandru Paduraru</h4>
                            <span>CEO @ Creative Tim</span>
                        </div>
                    </div>
                    <p className="font-noto text-sm leading-6 text-gray-100 mt-5">
                        Here at Creative Tim, we supply over 2 million developers worldwide with UI tools like admin dashboards and UI kits. To make the most informed decisions, it's essential to rely on accurate data sources. That's why we've chosen to transition to Nepcha for our analytics needs.
                    </p>
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
                            <h4 className="mb-1">Rares Toma</h4>
                            <span>CEO @ Loopple Technologies</span>
                        </div>
                    </div>
                    <p className="font-noto text-sm leading-6 text-gray-100 mt-5">
                        Our team is dedicated to developing one of the most intricate low-code/no-code browser editors available. We were drawn to Nepcha for its elegant simplicity as an analytics tool, and we couldn't be happier with our choice to include it as part of our offerings for our customers.
                    </p>
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

    )
  }
}

export default Testimonials;