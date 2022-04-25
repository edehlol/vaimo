import styled from 'styled-components';
import device from '../../breakpoints';
import AddToBox from '../../components/AddToBox';
import InfoBox from '../../components/InfoBox';
import ProductImage from '../../components/ProductImage';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #333333;

  @media ${device.desktop} {
    flex-direction: row;
  }
`;

export default function ProductPage() {
  return (
    <Container>
      <ProductImage />
      <InfoBox />
      <AddToBox />
    </Container>
  );
}
