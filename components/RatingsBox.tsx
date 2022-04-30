import Image from 'next/image';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectCount, selectRating, selectTotalBuyers } from '../features/product/productSlice';
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
  const rating = useAppSelector(selectRating);
  const count = useAppSelector(selectCount);
  const totalBuyers = useAppSelector(selectTotalBuyers);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < Number(rating); i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <Container>
      <div>{renderStars()}</div>
      <Text size="small" color="orange">
        {rating}
      </Text>
      <Text size="small" color="gray">
        {count} reviews
      </Text>
      <Text size="small" style={{ marginLeft: '24px' }}>
        {totalBuyers} buyers
      </Text>
    </Container>
  );
}
