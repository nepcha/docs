const React = require('react');

class Banner extends React.Component {
  render() {
    return (
      <div className="lg:px-36 md:px-16 sm:px-7 px-6 lg:mt-40 mt-28">
        <div className="bg-goalconversion bg-cover bg-no-repeat w-full flex rounded-xl">
            <div className="flex flex-col xl:w-3/5 w-2/4 sm:pl-9 pl-4 justify-center pt-6 pb-6">
                <span className="font-noto xl:text-base lg:text-sm text-xs leading-10 font-bold text-white-100">Simple charts &amp; Data Visualisation</span>
                <p className="font-noto xl:text-3xl lg:text-xl sm:text-base text-xs xl:leading-10 font-bold text-white-100 w-5/6 mt-2"> Start tracking up to 10.000 visits on multiple websites for free. Share stats with your team in a beautiful way.</p>
                <a href="https://app.nepcha.com/register" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg sm:w-32 sm:text-xs w-28 text-[10px] mt-4 bg-white-100/20 hover:bg-white-100/40 border border-white-100/40">
                    Free Signup
                </a>
            </div>
            <div className="bg-sidegoalconversion bg-no-repeat bg-center flex justify-center items-center xl:w-2/5 w-2/4">
                <img src="/img/logoWhite.png" className="w-32 h-32" />
            </div>
        </div>
      </div>
    )
  }
}

export default Banner;
