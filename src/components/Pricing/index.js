import React from "react";
import { Tab } from "@headlessui/react";
export default function Pricing() {
  const categories = {
    "Premium 1": [
      {
        id: 1,
        title: "Up to 20.000 visits"
      },
      {
        id: 2,
        title: "50 websites",
      },
      {
        id: 3,
        title: "100% data ownership",
      },
      {
        id: 4,
        title: "Unlimited data retention",
      },
      {
        id: 5,
        title: "Priority Support",
      },
    ],
    "Premium 2": [
      {
        id: 1,
        title: "Up to 100.000 visits",
      },
      {
        id: 2,
        title: "50 websites",
      },
      {
        id: 3,
        title: "100% data ownership",
      },
      {
        id: 4,
        title: "Unlimited data retention",
      },
      {
        id: 5,
        title: "Priority Support",
      },
    ],
    "Premium 3": [
      {
        id: 1,
        title: "Up to 200.000 visits",
      },
      {
        id: 2,
        title: "50 websites",
      },
      {
        id: 3,
        title: "100% data ownership",
      },
      {
        id: 4,
        title: "Unlimited data retention",
      },
      {
        id: 5,
        title: "Priority Support",
      },
    ],
    "Premium 4": [
      {
        id: 1,
        title: "Up to 500.000 visits",
      },
      {
        id: 2,
        title: "50 websites",
      },
      {
        id: 3,
        title: "100% data ownership",
      },
      {
        id: 4,
        title: "Unlimited data retention",
      },
      {
        id: 5,
        title: "Priority Support",
      },
    ],
    "Premium 5": [
      {
        id: 1,
        title: "Up to 5 mil visits",
      },
      {
        id: 2,
        title: "50 websites",
      },
      {
        id: 3,
        title: "100% data ownership",
      },
      {
        id: 4,
        title: "Unlimited data retention",
      },
      {
        id: 5,
        title: "Priority Support",
      },
    ],
    "Premium 6": [
      {
        id: 1,
        title: "5+ mil visits",
      },
      {
        id: 2,
        title: "50+ websites",
      },
      {
        id: 3,
        title: "100% data ownership",
      },
      {
        id: 4,
        title: "Unlimited data retention",
      },
      {
        id: 5,
        title: "Priority Support",
      },
    ],
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const getPrice = (type) => {
    switch (type) {
      case "Premium 1":
        return "$8/month";
      case "Premium 2":
        return "$18/month";
      case "Premium 3":
        return "$28/month";
      case "Premium 4":
        return "$58/month";
      case "Premium 5":
        return "$98/month";
      case "Premium 6":
        return "Contact Us";
    }
  };
  const getVisits = (type) => {
    switch (type) {
      case "Premium 1":
        return "20.000";
      case "Premium 2":
        return "100.000";
      case "Premium 3":
        return "200.000";
      case "Premium 4":
        return "500.000";
      case "Premium 5":
        return "5 mil";
      case "Premium 6":
        return "5+ mil";
    }
  };
  return (
    <div className="lg:px-36 md:px-16 sm:px-7 px-6 lg:mt-40 mt-24" id="pricing">
      <div>
        <div className="flex flex-col justify-center items-center mb-20">
          <h3 className="font-bold sm:text-lg text-base text-purple-100 mb-px">
            {" "}
            Pricing{" "}
          </h3>
          <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center">
            {" "}
            Choose Your Favorite Plan
          </h2>
          <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8">
            Join thousands of people who base their decisions on Nepcha
            Analytics.
          </p>
        </div>
        <div className="flex justify-center lg:space-x-4 lg:space-y-0 space-y-7 lg:flex-row flex-col mb-20">
          <div className="flex w-1/2 flex-col sm:flex-row sm:px-0 border border-gray-600 rounded-xl" >
            <Tab.Group vertical onChange={setSelectedIndex}>
              <Tab.List className="flex w-full flex-col space-y-1 rounded-sm  p-1 sm:w-2/5">
                {Object.keys(categories).map((category, i) => (
                  <Tab
                    key={category}
                    className={"rounded-md"}
                  >
                    
                    <div className={"flex flex-row items-center rounded-md justify-center py-3 text-md font-semibold leading-5 hover:bg-purple-100 hover:text-white-100" +
                        (selectedIndex === i
                          ? " bg-purple-100 text-white-100"
                          : " text-purple-100")
                      }
                    >
                        
                        <div class="flex-none w-1/2">
                            <div>
                                <h5 class="mb-0 font-bold dark:text-white">
                                {getPrice(category)}
                                </h5>
                                <p class="mb-0 dark:text-white dark:opacity-60">
                                  <span class="text-sm font-bold leading-normal">{getVisits(category)} visits</span>
                                </p>
                            </div>
                        </div>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="ml-8 flex items-center justify-center flex-grow">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={
                      "flex flex-col rounded-md py-3 px-0 pt-0 pb-0 focus:outline-none w-full"
                    }
                  >
                    <ul>
                      {posts.map((post) => (
                        <li key={post.id} className="rounded-md border-b-black-200">
                          <h3 className="flex justify-between text-sm font-medium leading-5 text-gray-100 font-noto ">
                            {post.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#3634e5"
                            >
                              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                          </h3>
                        </li>
                      ))}
                        <li className="rounded-md justify-center">
                            <span className="flex w-full justify-center">
                            {
                             selectedIndex === 5 ? (
                                <a href="mailto:hello@nepcha.com" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-purple-100 hover:shadow-purple-200 justify-center">
                                    Contact us
                                </a>
                            ) : (
                              <a href="https://app.nepcha.com/user/account/settings" className="font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-4 rounded-lg bg-purple-100 hover:shadow-purple-200 justify-center">
                                Start now
                              </a>
                              )
}
                            </span>
                          </li>
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
