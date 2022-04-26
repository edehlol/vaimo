import Image from 'next/image';
import styled from 'styled-components';
import Product from '../Product';
import Text from './Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 12px;
  line-height: 16px;
`;

const Star = () => <Image src="/icons/star.png" width="14px" height="14px" alt="star rating" />;

export default function RatingsBox({
  rating,
  count,
}: {
  rating: Product['reviews']['rating'];
  count: Product['reviews']['count'];
}) {
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
        {rating}
      </Text>
      <Text size="small" color="gray">
        {count} reviews
      </Text>
      <Text size="small" style={{ marginLeft: '24px' }}>
        19 buyers
      </Text>
    </Container>
  );
}
