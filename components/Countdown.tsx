import Image from 'next/image';
import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 24px 0;
  column-gap: 24px;
`;

export default function Countdown() {
  return (
    <Container>
      <Text color="orange">20% OFF</Text>
      <Text color="gray">Discount ends in</Text>
      <Text
        color="gray"
        style={{ display: 'flex', columnGap: '12px', alignItems: 'center', fontStyle: 'italic' }}
      >
        <Image src="/icons/clock.png" width="16px" height="16px" alt="clock" />
        2d:01h:56m:49s
      </Text>
    </Container>
  );
}
