import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  line-height: 16px;
`;
const Reviews = styled.span`
  color: #999999;
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

      <span>5.0</span>
      <Reviews>7 reviews</Reviews>
      <span>19 buyers</span>
    </Container>
  );
}
