import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 24px 0;
  column-gap: 24px;
`;

const Discount = styled.span`
  color: #ff6600;
`;
const Text = styled.span`
  color: #999999;
  display: flex;
  column-gap: 12px;
`;

export default function Countdown() {
  return (
    <Container>
      <Discount>20% OFF</Discount>
      <Text>Discount ends in</Text>
      <Text>
        <Image src="/icons/clock.png" width="16px" height="16px" alt="clock" />
        2d:01h:56m:49s
      </Text>
    </Container>
  );
}
