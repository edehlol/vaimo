import Image from 'next/image';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectDiscount, selectDiscountEndDate } from '../features/product/productSlice';
import Text from './Text';
import Countdown from 'react-countdown';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 24px 0;
  column-gap: 24px;
`;

export default function Discount() {
  const discount = useAppSelector(selectDiscount);
  const endDate = useAppSelector(selectDiscountEndDate);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    return (
      <span>
        {days}d:{hours}h:{minutes}m:{seconds}s
      </span>
    );
  };
  return (
    <Container>
      <Text color="orange">{discount} OFF</Text>
      <Text color="gray">Discount ends in</Text>
      <Text
        color="gray"
        style={{ display: 'flex', columnGap: '12px', alignItems: 'center', fontStyle: 'italic' }}
      >
        <Image src="/icons/clock.png" width="16px" height="16px" alt="clock" />
        <Countdown
          date={Date.now() + (Date.parse(endDate) - Date.now())}
          daysInHours={false}
          renderer={renderer}
        />
      </Text>
    </Container>
  );
}
