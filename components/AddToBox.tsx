import Image from 'next/image';
import styled from 'styled-components';
import device from '../breakpoints';
import ButtonGroup from './ButtonGroup';
import Cart from './Cart';
import ShippingInfo from './ShippingInfo';

const Container = styled.div`
  padding: 28px 26px;
  align-self: stretch;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: #ffffff;
  @media ${device.desktop} {
    align-self: flex-start;
  }
`;

export default function AddToBox() {
  return (
    <Container>
      <Cart />
      <ShippingInfo />
      <ButtonGroup />
    </Container>
  );
}
