import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectOptions } from '../features/product/productSlice';
import { Option } from '../Product';
import Quantity from './Quantity';
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
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
