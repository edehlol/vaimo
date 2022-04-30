import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Text from './Text';

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

const PaymentContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;
const CardsContainer = styled.div`
  display: flex;
  column-gap: 4px;
`;
const LinksContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: #999999;
  }
`;

export default function Assurance() {
  return (
    <Container>
      <AssuranceContainer>
        <Image src="/icons/assurance.svg" width="12px" height="14px" alt="security lock" />
        <div>
          <Text weight="bold" color="gray">
            Trade Assurance
          </Text>{' '}
          <Text color="gray" size="small">
            protects your Alibaba.com orders
          </Text>
        </div>
      </AssuranceContainer>
      <PaymentContainer>
        <Text size="small" color="gray">
          Payments:{' '}
        </Text>
        <CardsContainer>
          <Image src="/icons/visa.svg" width="17px" height="12px" alt="visa" />
          <Image src="/icons/mastercard.svg" width="17px" height="12px" alt="mastercard" />
          <Image src="/icons/apple_pay.svg" width="28px" height="12px" alt="apple pay" />
        </CardsContainer>
      </PaymentContainer>

      <LinksContainer>
        <Link href="https://ship.alibaba.com/" passHref>
          <StyledLink>
            <Text size="small" color="gray">
              Alibaba.com Logistics
            </Text>
          </StyledLink>
        </Link>

        <Link href="https://www.inspectsolutions.com/" passHref>
          <StyledLink>
            <Text size="small" color="gray">
              Inspection Solutions
            </Text>
          </StyledLink>
        </Link>
      </LinksContainer>
    </Container>
  );
}
