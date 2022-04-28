import Image from 'next/image';
import styled from 'styled-components';
import Text from './Text';
import device from '../breakpoints';
import { useAppSelector } from '../app/hooks';
import {
  selectCurrency,
  selectLeadTime,
  selectShippingCost,
  selectShippingTime,
} from '../features/product/productSlice';

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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  column-gap: 48px;
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

interface ButtonProps {
  primary?: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 24px 0;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #FF6600')};
  background-color: ${(props) => (props.primary ? '#FF6600' : 'transparent')};
  color: ${(props) => (props.primary ? '#FFFFFF' : '#FF6600')};
`;

export default function AddToBox() {
  const currency = useAppSelector(selectCurrency);
  const shippingCost = useAppSelector(selectShippingCost);
  const leadTime = useAppSelector(selectLeadTime);
  const shippingTime = useAppSelector(selectShippingTime);

  const formatTime = (str: string) => {
    const [value, unit] = str.split(' ');
    return (
      <>
        <b>{value}</b> {unit}
      </>
    );
  };
  return (
    <Container>
      <Row>
        <Text color="gray">Ship to South Africa by Express UPS Sav…</Text>
        <Text size="large" style={{ whiteSpace: 'pre' }}>
          <b>
            {currency} {shippingCost}
          </b>
        </Text>
      </Row>

      <DurationContainer>
        <Text color="gray" style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}>
          <span>Lead Time {formatTime(leadTime)} </span>

          <Image src="/icons/info.png" width="15px" height="14px" alt="info" />
        </Text>
        <Text color="gray" style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}>
          <span>Shipping time {formatTime(shippingTime)} </span>

          <Image src="/icons/info.png" width="15px" height="14px" alt="info" />
        </Text>
      </DurationContainer>
      <ButtonsContainer>
        <Button primary>Login to Purchase</Button>
        <Button>
          <Image src="/icons/envelope.png" width="14px" height="12px" alt="envelope" />
          <span style={{ marginLeft: '12px' }}>Contact the Supplier</span>
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
