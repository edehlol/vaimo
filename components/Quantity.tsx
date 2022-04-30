import Image from 'next/image';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import {
  addToQuantity,
  selectQuantity,
  setQuantity,
  subtractFromQuantity,
  validateQuantity,
} from '../features/product/productSlice';
import { Option } from '../Product';

const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  border: 1px solid #e6e7eb;
  height: 40px;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  }
`;

interface QuantityButtonProps {
  minus?: boolean;
  plus?: boolean;
  quantity: number;
}
const QuantityButton = styled.div<QuantityButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: ${(props) =>
    (props.plus && '1px solid #FF6600') || (props.quantity > 0 && '1px solid #FF6600')};
  border-right: ${(props) => props.minus && props.quantity <= 0 && '1px solid #E6E7EB'};
  margin: -1px;
  border-radius: ${(props) => (props.plus && '0 2px 2px 0') || (props.minus && '2px 0 0 2px')};
  &:hover {
    cursor: pointer;
  }
  user-select: none;
  -webkit-user-select: none;
`;
const Input = styled.input`
  border: none;
  width: 40px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Quantity = ({
  optionId,
  min = 0,
  max = 999,
  step = 1,
}: {
  optionId: Option['id'];
  min?: number;
  max?: number;
  step?: number;
}) => {
  const quantity = useAppSelector((state: RootState) => selectQuantity(state, optionId));
  const dispatch = useAppDispatch();

  return (
    <QuantityContainer>
      <QuantityButton
        minus
        quantity={quantity || 0}
        onClick={() => dispatch(subtractFromQuantity(optionId))}
      >
        <Image src="/icons/minus.png" width="14px" height="2px" alt="minus" />
      </QuantityButton>
      <Input
        value={quantity}
        onBlur={() => dispatch(validateQuantity({ optionId, quantity }))}
        onChange={(e) => dispatch(setQuantity({ optionId, quantity: e.target.value }))}
        type="number"
        min={min}
        max={max}
        step={step}
      />
      <QuantityButton
        plus
        quantity={quantity || 0}
        onClick={() => dispatch(addToQuantity(optionId))}
      >
        <Image src="/icons/plus.png" width="14px" height="14px" alt="minus" />
      </QuantityButton>
    </QuantityContainer>
  );
};

export default Quantity;
