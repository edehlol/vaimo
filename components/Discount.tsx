import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectDiscount, selectDiscountEndDate } from '../features/product/productSlice';
import Text from './Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 24px 0;
  column-gap: 24px;
`;

const Countdown = ({ date }: { date: string }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const end = dayjs(date);
      const diff = end.diff(now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {days}d:{hours}h:{minutes}m:{seconds}s
    </>
  );
};

export default function Discount() {
  const discount = useAppSelector(selectDiscount);
  const endDate = useAppSelector(selectDiscountEndDate);

  return (
    <Container>
      <Text color="orange">{discount} OFF</Text>
      <Text color="gray">Discount ends in</Text>
      <Text
        color="gray"
        style={{ display: 'flex', columnGap: '12px', alignItems: 'center', fontStyle: 'italic' }}
      >
        <Image src="/icons/clock.png" width="16px" height="16px" alt="clock" />
        <Countdown date={endDate} />
      </Text>
    </Container>
  );
}
