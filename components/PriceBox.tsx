import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import {
  selectCurrency,
  selectHighestPrice,
  selectLowestPrice,
  selectOldLowestPrice,
  selectOldHighestPrice,
} from '../features/product/productSlice';
import Text from './Text';

const Container = styled.div`
  padding: 16px 0px;
  border-top: 1px solid #e6e7eb;
  border-bottom: 1px solid #e6e7eb;
  margin: 12px 0px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 14px;
`;

const Divider = styled.div`
  width: 1px;
  height: 16px;
  color: #edf0f3;
  width: 11px;
  text-align: center;
`;

export default function PriceBox() {
  const currency = useAppSelector(selectCurrency);
  const lowestPriceOption = useAppSelector(selectLowestPrice);
  const highestPriceOption = useAppSelector(selectHighestPrice);
  const oldLowestPriceOption = useAppSelector(selectOldLowestPrice);
  const oldHighestPriceOption = useAppSelector(selectOldHighestPrice);

  console.log(currency);
  return (
    <Container>
      <PriceContainer>
        <Text color="orange" size="large" weight="bold">
          {currency} {lowestPriceOption} - {currency} {highestPriceOption}
        </Text>
        <Text color="gray">/ Option</Text>
        <Divider>|</Divider>
        <Text color="gray">(Min.Order)</Text>
      </PriceContainer>
      <Text color="gray" style={{ textDecoration: 'line-through' }}>
        {currency} {oldLowestPriceOption} - {currency} {oldHighestPriceOption}
      </Text>
    </Container>
  );
}
