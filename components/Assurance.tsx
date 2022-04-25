import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

const AssuranceContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const BoldText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
`;
const Text = styled.span`
  font-size: 12px;
  color: #999999;
`;

const PaymentContainer = styled.div`
  display: flex;
  column-gap: 4px;
  color: #999999;
  font-size: 12px;
`;
const CardsContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;
const LinksContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

export default function Assurance() {
  return (
    <Container>
      <AssuranceContainer>
        <Image src="/icons/assurance.svg" width="12px" height="14px" alt="security lock" />
        <div>
          <BoldText>Trade Assurance</BoldText> <Text>protects your Alibaba.com orders</Text>
        </div>
      </AssuranceContainer>
      <PaymentContainer>
        <span>Payments: </span>
        <CardsContainer>
          <Image src="/icons/visa.svg" width="17px" height="12px" alt="visa" />
          <Image src="/icons/mastercard.svg" width="17px" height="12px" alt="mastercard" />
          <Image src="/icons/apple_pay.svg" width="28px" height="12px" alt="apple pay" />
        </CardsContainer>
      </PaymentContainer>

      <LinksContainer>
        <Text>Alibaba.com Logistics</Text>
        <Text>Inspection Solutions</Text>
      </LinksContainer>
    </Container>
  );
}
