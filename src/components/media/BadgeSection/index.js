import React from "react";
import CodeBlock  from '@theme/CodeBlock';

export default function BadgeSection() {

  const root_url = "https://nepcha.com";
  const items = {
    dark: [
      {
        name: "analytics-by-nepcha-black-transparent.png",
        size: "32",
        height: "32",
        type: "png",
        url: root_url + "/img/media/badges/analytics-by-nepcha-black-transparent.png",
      },
      {
        name: "analytics-by-nepcha-black.png",
        size: "32",
        height: "32",
        type: "png",
        url: root_url + "/img/media/badges/analytics-by-nepcha-black.png",
      },
      {
        name: "analytics-by-nepcha-white.png",
        size: "8",
        height: "32",
        type: "png",
        url: root_url + "/img/media/badges/analytics-by-nepcha-white.png",
      },
      {
        name: "analytics-by-nepcha-blue.png",
        size: "8",
        height: "32",
        type: "png",
        url: root_url + "/img/media/badges/analytics-by-nepcha-blue.png",
      },
      {
        name: "analytics-by-nepcha-white-transparent.png",
        size: "8",
        background: "bg-black-200",
        height: "32",
        type: "png",
        url: root_url + "/img/media/badges/analytics-by-nepcha-white-transparent.png",
      }


    ],
  }

  const getEmbed = (logo) => {
    return `<a href="${root_url}"><img src="${logo.url}" height="${logo.height}" /> </a>`
  }

  return (
    <>
      <div className="lg:mt-16 mt-16 lg:px-36 md:px-16 sm:px-7 px-5">
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-16">
                <h3 className="font-semibold sm:text-xl text-base text-purple-100 mb-px"> 
                  The Nepcha badge
                </h3>
                <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center max-w-2xl"> 
                  Nepcha badges for use on social media and other digital platforms
                </h2>
                <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8 mt-2">
                By providing these logos in various formats and sizes, users can choose the best option for their specific use case and ensure that the Nepcha brand is represented accurately and consistently.
                </p>
            </div>
            <div className="flex justify-center items-center">
              <table>
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-gray-100 border border-r-0 w-64">
                      Badge
                    </th>
                    <th className="px-4 py-2 text-gray-100 border border-l-0">
                      Embed Snippet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.dark.map((logo, index) => (
                    <tr key={index}>
                      <td className={`px-4 py-2 text-gray-100 border border-r-0 ${logo.background ? logo.background : 'bg-white-100'}`}>
                        <img src={`/img/media/badges/${logo.name}`} height={logo.height} />
                      </td>
                      <td className="px-4 py-2 text-gray-100 border border-l-0 bg-white-100">
                        <CodeBlock className="language-html max-w-sm mb-0">
                          {getEmbed(logo)}
                        </CodeBlock>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </>
  )

}