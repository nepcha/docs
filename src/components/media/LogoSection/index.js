import React from "react";
import CodeBlock  from '@theme/CodeBlock';

export default function LogoSection() {

  const root_url = "https://nepcha.com";
  const logo_list = {
    dark: [
      {
        name: "logo-nepcha-black-blue.png",
        size: "32",
        height: "42",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-black-blue.png",
      },
      {
        name: "logo-nepcha-black.png",
        size: "32",
        height: "42",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-black.png",
      },
      {
        name: "logo-nepcha-icon-borderd.png",
        size: "8",
        height: "32",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-icon-borderd.png",
      },
      {
        name: "logo-nepcha-icon-full.png",
        size: "8",
        height: "32",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-icon-full.png",
      },
      {
        name: "logo-nepcha-black-icon.png",
        size: "8",
        height: "32",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-black-icon.png",
      },
    ],
    light: [
      {
        name: "logo-nepcha-white-blue.png",
        size: "32",
        height: "42",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-white-blue.png",
      },
      {
        name: "logo-nepcha-white.png",
        size: "32",
        height: "42",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-white.png",
      },
      {
        name: "logo-nepcha-white-icon.png",
        size: "8",
        height: "32",
        type: "png",
        url: root_url + "/img/media/logos/logo-nepcha-white-icon.png",
      },
    ],
  }

  const getEmbed = (logo) => {
    return `<a href="${root_url}"><img src="${logo.url}" height="${logo.height}" /> </a>`
  }

  return (
    <>
      <div className="lg:mt-40 mt-32 lg:px-36 md:px-16 sm:px-7 px-5">
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center mb-16">
                <h3 className="font-semibold sm:text-xl text-base text-purple-100 mb-px">
                  The Nepcha logo
                </h3>
                <h2 className="font-extrabold lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:leading-lg text-gray-200 text-center max-w-2xl">
                  Official Nepcha logos in various formats and sizes
                </h2>
                <p className="text-gray-100 font-noto sm:text-lg text-sm sm:leading-sm text-center max-w-xl mb-8 mt-2">
                By providing these logos in various formats and sizes, users can choose the best option for their specific use case and ensure that the Nepcha brand is represented accurately and consistently.
                </p>
            </div>
            <div className="flex justify-between items-center lg:flex-row flex-col-reverse mb-4">
              <div className="lg:pl-36 lg:!pr-0 lg:w-1/2 sm:w-3/4 w-11/12 md:px-16 sm:px-7 px-3">
                <table className="rounded-md border border-solid border-gray-300">
                  <thead className="rounded-md">
                    <tr>
                      <th className="px-4 py-2 text-gray-700 text-sm w-50">
                        Light Background
                      </th>
                      <th className="px-4 py-2 text-gray-700 text-sm">
                        Embed Snippet
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {logo_list.dark.map((logo, index) => (
                      <tr key={index}>
                        <td className={`px-4 py-2 text-gray-100 bg-white-100 ${Object.keys(logo_list.dark).length - 1 != index ? 'border border-r-0 border-l-0': ''}`}>
                          <img src={`/img/media/logos/${logo.name}`} height={logo.height} />
                        </td>
                        <td className={`px-4 py-2 text-gray-100 bg-white-100 ${Object.keys(logo_list.dark).length - 1 != index ? 'border border-r-0 border-l-0': ''}`}>
                          <CodeBlock className="language-html max-w-sm mb-0">
                            {getEmbed(logo)}
                          </CodeBlock>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
              <div className="lg:w-1/2 w-full lg:mb-0 mb-5 flex ml-2">
                <table className="rounded-md border border-solid border-gray-300">
                  <thead className="rounded-md">
                    <tr>
                      <th className="px-4 py-2 text-gray-700 text-sm w-64">
                        Dark Background
                      </th>
                      <th className="px-4 py-2 text-gray-700 text-sm">
                        Embed Snippet
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {logo_list.light.map((logo, index) => (
                      <tr key={index} >
                        <td className={`px-4 py-2 text-gray-100 bg-black-200 ${Object.keys(logo_list.light).length - 1 != index ? 'border border-r-0 border-l-0': ''}`}>
                          <img src={`/img/media/logos/${logo.name}`} height={logo.height} />
                        </td>
                        <td className={`px-4 py-2 text-gray-100 bg-white-100 ${Object.keys(logo_list.light).length - 1 != index ? 'border border-r-0 border-l-0': ''}`}>
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
      </div>
    </>
  )

}
