import { GetStaticProps } from 'next';
import styled from 'styled-components';
import device from '../../breakpoints';
import AddToBox from '../../components/AddToBox';
import InfoBox from '../../components/InfoBox';
import ProductImage from '../../components/ProductImage';
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
  console.log(product);
  return (
    <Container>
      <ProductImage src={product.gallery[0].main} />
      <InfoBox
        name={product.name}
        tags={product.tags}
        rating={product.reviews.rating}
        count={product.reviews.count}
      />
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
  const res = await fetch(`https://fe-assignment.vaimo.net/`).then((res) => res.json());
  return {
    props: {
      product: res.product,
    },
  };
};
