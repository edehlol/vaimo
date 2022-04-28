import { nanoid } from '@reduxjs/toolkit';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import device from '../../breakpoints';
import AddToBox from '../../components/AddToBox';
import InfoBox from '../../components/InfoBox';
import ProductImage from '../../components/ProductImage';
import { setProduct } from '../../features/product/productSlice';
import Product from '../../Product';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #333333;

  @media ${device.desktop} {
    flex-direction: row;
    column-gap: 24px;
  }
`;

export default function ProductPage({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  dispatch(setProduct(product));

  console.log(product);

  return (
    <Container>
      <ProductImage />
      <InfoBox />
      <AddToBox />
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { product } = await fetch(`https://fe-assignment.vaimo.net/`).then((res) => res.json());
  const options = Object.keys(product.options).map((key) => {
    return { ...product.options[key], id: nanoid(), quantity: 5 };
  });
  return {
    props: {
      product: { ...product, options },
      options,
    },
  };
};
