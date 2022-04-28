import styled from 'styled-components';
import Image from 'next/image';
import { useAppSelector } from '../app/hooks';
import {
  selectFastDispatch,
  selectInStock,
  selectReadyToShip,
} from '../features/product/productSlice';

const List = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20px;

  border-radius: 2px;
  overflow: hidden;
`;

interface BadgeProps {
  primary?: boolean;
}
const Badge = styled.div<BadgeProps>`
  color: ${(props) => (props.primary ? 'white' : '#ff6600')};
  background-color: ${(props) => (props.primary ? '#ff6600' : '#fff0e6;')};
  background-image: ${(props) =>
    props.primary && 'linear-gradient(270deg, #f5515f 0%, #ff7527 100%)'};
  padding: 2px 8px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-weight: ${(props) => props.primary && '500'};
`;
const BadgeIcon = ({ src }: { src: string }) => {
  return <Image src={src} width="12px" height="12px" alt="Ok Icon" />;
};

export default function BadgeList() {
  const isReadyToShip = useAppSelector(selectReadyToShip);
  const isInStock = useAppSelector(selectInStock);
  const isFastDispatch = useAppSelector(selectFastDispatch);
  return (
    <List>
      {isReadyToShip && <Badge primary>Ready to Ship</Badge>}

      <Badge>{isInStock && <BadgeIcon src="/icons/ok.png" />} In Stock</Badge>

      <Badge>{isFastDispatch && <BadgeIcon src="/icons/ok.png" />} Fast Dispatch</Badge>
    </List>
  );
}
