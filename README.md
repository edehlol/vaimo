This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The project is deployed on Vercel here: [https://vaimo-puce.vercel.app/product/1](https://vaimo-puce.vercel.app/product/1)

## Instructions

1. Clone the project
2. Install the dependencies with `npm install`
3. Run the development server with `npm run dev`
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

This project is built using the NextJS framework for multiple reasons. Firstly, as this project is simulating an e-commerce product page it must be SEO-friendly. The standard approach for API fetching data is through the client. The downsides of client-side fetching are that the user first has to wait for the data to appear _after_ the page has already loaded, and because the data isn't available yet on page request search engines have a hard time ranking the page based on the fetched data. Therefore I've utilized a built-in function of NextJS to render the page on the server-side using the `getServerSideProps` function. This ensures that not only the data will be available for better SEO, but also that the user will see it immediately when the page is loaded, thus leading to better perceived performance. Secondly, there are also various NextJS features used throughout the project, such as the `Image` component which uses [image optimization](https://nextjs.org/docs/basic-features/image-optimization) for faster performance and page load, the `Head` component to display dynamic page titles based on the fetched product name and the built-in routing system which allows for dynamic URL generation.

The code is written in Typescript for type checking all the data being passed around.

I've also used the `styled-components` library for the styling of the page. The main reason for this is to make it easier to maintain the styling of components whilst also being able to use props to dynamically change it.

Redux is used for state management. The data gets fetched from the API and is then stored in the Redux store. Instead of utilizing props to pass this data around, I've used the `useSelector` hook to retrieve the data from the store. This allows for the data to be accessed from anywhere in the project and prevents prop-drilling and unnecessary re-renders.

HeadlessUI is used for the Tooltip component. This library provides ustyled and fully accessible UI components. I've used it before with TailwindCSS but here I figured since it's unstyled I could just as well integrate it with styled-components to create a custom tooltip component. React-Popper is used here to automatically position the tooltip within the viewport and prevent it from overflowing the page.

DayJS is used for the date formatting for the Countdown component.

## How to read this project

Component names are mostly derived from the MarvelApp design.

The main sections are divided into multiple component files, from top to bottom:

- ProductImage
- InfoBox
  - BadgeList
  - ProductName
  - RatingsBox
  - PriceBox
  - MarchExpo
  - Discount
  - Products
  - Assurance
- AddToBox
  - Cart
  - ShippingInfo
  - ButtonGroup

A `Text` component is used for all text elements. This is to have consistency in the styling with pre-defined color/size/weight options.

Redux Product state is found in `features/product/productSlice.ts`

`styles/styled.d.ts` and `theme.ts` has the pre-defined styling options for the components with accompanying typescript type checks.

a `breakpoints.ts` file is used to define the breakpoints for the responsive design with styled-components.

## Additional Notes

Currency selections happens on the assumption that the currency for all options and shipping cost is the same, thus:

```js
export const selectCurrency = (state: RootState) => state.product.options[0].price.currency.symbol;
```

Changed API options data structure from object of objects into array of objects on fetch for easier data manipulation. This happens after fetching the data from the API on the server-side:

```js
const { product } = await fetch(`https://fe-assignment.vaimo.net/`).then((res) => res.json());
const options = Object.keys(product.options).map((key) => {
  return { ...product.options[key], id: nanoid(), quantity: 0 };
});
```

Hover effects on various components and color change on button hover.
