import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import {
  selectQuantity,
  selectOptions,
  addToQuantity,
  subtractFromQuantity,
  setQuantity,
  validateQuantity,
} from '../features/product/productSlice';
import { Option } from '../Product';
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  border: 1px solid #e6e7eb;
  height: 40px;
  border-radius: 2px;
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

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  width: 44%;
`;
const Price = styled.span`
  width: 20%;
`;

const Quantity = ({ optionId }: { optionId: Option['id'] }) => {
  const quantity = useAppSelector((state: RootState) => selectQuantity(state, optionId));
  const [input, setInput] = useState(quantity || 0);
  const dispatch = useAppDispatch();

  const validateInput = () => {
    console.log('test');
    if (input < 0 || input === undefined) {
      setInput(0);
    }
    dispatch(validateQuantity({ optionId, quantity: input }));
  };
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
        onBlur={validateInput}
        onChange={(e) => dispatch(setQuantity({ optionId, quantity: e.target.value }))}
        type="number"
        min={0}
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

const Product = ({
  id,
  name,
  value,
  currency,
}: {
  id: Option['id'];
  name: Option['label'];
  value: Option['price']['value'];
  currency: Option['price']['currency']['symbol'];
}) => {
  return (
    <ProductContainer>
      <Name>{name}</Name>
      <Price>
        <>
          {currency} {value.toFixed(2)}
        </>
      </Price>
      <Quantity optionId={id} />
    </ProductContainer>
  );
};

export default function Products() {
  const options = useAppSelector(selectOptions);
  const renderOptions = () => {
    return options.map((option: Option) => (
      <Product
        id={option.id}
        key={option.label}
        name={option.label}
        value={option.price.value}
        currency={option.price.currency.symbol}
      />
    ));
  };
  return <ProductsContainer>{renderOptions()}</ProductsContainer>;
}
