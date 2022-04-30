This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project is deployed on Vercel here: [https://vaimo-puce.vercel.app/product/1](https://vaimo-puce.vercel.app/product/1)

## Getting Started

1. Clone the project
2. Install the dependencies with ```npm install```
3. Run the development server with ```npm run dev```
4. Open [http://localhost:3000/product/1](http://localhost:3000/product/1) with your browser to see the product page.


## Tech Stack

### Frameworks
- NextJS
- Typescript
- Styled-Components

### Libraries
- Redux-Toolkit
- HeadlessUI
- React-Popper
- DayJS

## Description

This project is built using the NextJS framework for multiple reasons. Firstly, as this project is simulating an e-commerce product page it must be SEO-friendly. The standard approach for API fetching data is through the client. The downsides of client-side fetching are that the user first has to wait for the data to appear _after_ the page has already loaded, and because the data isn't available yet on page request search engines have a hard time ranking the page based on the fetched data. Therefore I've utilized a built-in function of NextJS to render the page on the server-side using the ```getServerSideProps``` function. This ensures that not only the data will be available for better SEO, but also that the user will see it immediately when the page is loaded, thus leading to better perceived performance. Secondly, there are various NextJS features used throughout the project, such as the ```Image``` component which uses [image optimization](https://nextjs.org/docs/basic-features/image-optimization) for faster performance and page load.
