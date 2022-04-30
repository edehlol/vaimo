import Image from 'next/image';
import styled from 'styled-components';
import Text from './Text';
import device from '../breakpoints';
import { useAppSelector } from '../app/hooks';
import {
  selectCurrency,
  selectLeadInfo,
  selectLeadTime,
  selectShippingCost,
  selectShippingInfo,
  selectShippingTime,
} from '../features/product/productSlice';
import Cart from './Cart';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useState } from 'react';

const Container = styled.div`
  padding: 28px 26px;
  align-self: stretch;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: #ffffff;
  @media ${device.desktop} {
    align-self: flex-start;
  }
`;

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

interface ButtonProps {
  primary?: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 24px 0;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #FF6600')};
  background-color: ${(props) => (props.primary ? '#FF6600' : 'transparent')};
  color: ${(props) => (props.primary ? '#FFFFFF' : '#FF6600')};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.primary ? '#F25B00' : 'transparent')};
    border: ${(props) => (props.primary ? 'none' : '1px solid #F25B00')};
    color: ${(props) => (props.primary ? '#FFFFFF' : '#F25B00')};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: ${(props) => (props.primary ? '#D95100' : 'transparent')};
    border: ${(props) => (props.primary ? 'none' : '1px solid #D95100')};
    color: ${(props) => (props.primary ? '#FFFFFF' : '#D95100')};
  }
`;

const PopoverButton = styled(Popover.Button)<any>`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const PopoverPanel = styled(Popover.Panel)<any>`
  z-index: 20;
  position: absolute;
  background-color: white;
  width: 320px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e6e7eb;
  padding: 12px;
  border-radius: 8px;
`;

const InfoPopover = ({ info }: { info: string }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover style={{ position: 'relative' }}>
      <PopoverButton
        ref={setReferenceElement}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Image src="/icons/info.png" width="15px" height="14px" alt="info" />
      </PopoverButton>
      <Transition show={isShowing}>
        <PopoverPanel ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          {info}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default function AddToBox() {
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
    <Container>
      <Cart />
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
      <ButtonsContainer>
        <Button primary>Login to Purchase</Button>
        <Button>
          <Image src="/icons/envelope.png" width="14px" height="12px" alt="envelope" />
          <span style={{ marginLeft: '12px' }}>Contact the Supplier</span>
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
