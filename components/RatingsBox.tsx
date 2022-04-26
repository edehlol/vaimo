import Image from 'next/image';
import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 12px;
  line-height: 16px;
`;

const Star = () => <Image src="/icons/star.png" width="14px" height="14px" alt="star rating" />;

export default function RatingsBox() {
  return (
    <Container>
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>

      <Text size="small" color="orange">
        5.0
      </Text>
      <Text size="small" color="gray">
        7 reviews
      </Text>
      <Text size="small" style={{ marginLeft: '24px' }}>
        19 buyers
      </Text>
    </Container>
  );
}
