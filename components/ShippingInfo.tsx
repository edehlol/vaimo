import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import {
  selectCurrency,
  selectLeadInfo,
  selectLeadTime,
  selectShippingCost,
  selectShippingInfo,
  selectShippingTime,
} from '../features/product/productSlice';
import InfoPopover from './InfoPopover';
import Text from './Text';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  column-gap: 48px;
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export default function ShippingInfo() {
  const currency = useAppSelector(selectCurrency);
  const shippingCost = useAppSelector(selectShippingCost);
  const leadTime = useAppSelector(selectLeadTime);
  const shippingTime = useAppSelector(selectShippingTime);
  const leadInfo = useAppSelector(selectLeadInfo);
  const shippingInfo = useAppSelector(selectShippingInfo);
  const formatTime = (str: string) => {
    const [value, unit] = str.split(' ');
    return (
      <>
        <b>{value}</b> {unit}
      </>
    );
  };
  return (
    <>
      <Row>
        <Text color="gray">Ship to South Africa by Express UPS Sav…</Text>
        <Text size="large" style={{ whiteSpace: 'pre' }}>
          <b>
            {currency} {shippingCost.toFixed(2)}
          </b>
        </Text>
      </Row>

      <DurationContainer>
        <Text color="gray" style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}>
          <span>Lead Time {formatTime(leadTime)} </span>

          <InfoPopover info={leadInfo} />
        </Text>
        <Text color="gray" style={{ display: 'flex', columnGap: '13px', alignItems: 'center' }}>
          <span>Shipping time {formatTime(shippingTime)} </span>

          <InfoPopover info={shippingInfo} />
        </Text>
      </DurationContainer>
    </>
  );
}
