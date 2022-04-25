import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Countdown() {
  return (
    <Container>
      <span>20% OFF</span>
      <span>Discount ends in</span>

      <span>
        <Image src="/icons/clock.png" width="16px" height="16px" alt="clock" />
        2d:01h:56m:49s
      </span>
    </Container>
  );
}
