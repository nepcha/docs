---
sidebar_position: 2
title: How to install
---

# How to install Nepcha Analytics

import BrowserOnly from '@docusaurus/BrowserOnly';
import CodeBlock from '@theme/CodeBlock';

export const CurrentSite = () => {
  return (
    <BrowserOnly>
      {() =>  new URLSearchParams(window.location.search).get('site') || 'example.com'}
    </BrowserOnly>
  );
};

export const GetScript = () => {
  return (
    <BrowserOnly>
      {() => {
        const current_site = new URLSearchParams(window.location.search).get('site') || 'example.com';
        return <CodeBlock className="language-html"> {`<script defer data-site="${current_site}" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>` } </CodeBlock>;
        }
      }
    </BrowserOnly>
  );
};



A privacy-focused analytics tool for companies & startups. This solution ensures compliance with the GDPR, by not using cookies to track visitors. European data is stored in European cloud infrastructure, USA data is stored in USA cloud infrastructure.






<h2> Install Nepcha on your site (<CurrentSite/>)</h2>

#### Add the following script to your site:

Copy the following script and paste it into the `<head>` section of your site:

<GetScript/>

Where:
- `data-site` is the domain name of your site. For example, if your site is `https://example.com`, then `data-site` should be `example.com`.
- `src` is the URL of the Nepcha Analytics script.


## Where can you find the snippet

1. First, you have to go to [your sites](https://app.nepcha.com/sites) page, and here click on the settings icon.

   <img src="/img/docs/nepcha-sites-page.png" width="592" />

2. Now you will be redirected to the site's settings. Here, in the "General Information" section, you will find the JavaScript snippet.

   <img src="/img/docs/nepcha-sites-settings.png" width="592" />
