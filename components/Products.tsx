import Image from 'next/image';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { selectOptions } from '../features/product/productSlice';
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
interface IconContainerProps {
  minus?: boolean;
  plus?: boolean;
}
const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: ${(props) => props.plus && '1px solid #FF6600'};
  border-right: ${(props) => props.minus && '1px solid #E6E7EB'};
  margin: ${(props) => props.plus && '-1px'};
  border-radius: ${(props) => props.plus && '0 2px 2px 0'};
`;
const Input = styled.input`
  border: none;
  width: 40px;

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

const Quantity = () => {
  return (
    <QuantityContainer>
      <IconContainer minus>
        <Image src="/icons/minus.png" width="14px" height="2px" alt="minus" />
      </IconContainer>
      <Input defaultValue={0} />
      <IconContainer plus>
        <Image src="/icons/plus.png" width="14px" height="14px" alt="minus" />
      </IconContainer>
    </QuantityContainer>
  );
};

const Product = ({ name, price }: { name: string; price: string }) => {
  return (
    <ProductContainer>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Quantity />
    </ProductContainer>
  );
};

export default function Products() {
  const options = useAppSelector(selectOptions);
  const renderOptions = () => {
    return options.map((option) => (
      <Product
        key={option.label}
        name={option.label}
        price={`${option.price.currency.symbol} ${option.price.value}`}
      />
    ));
  };
  return <ProductsContainer>{renderOptions()}</ProductsContainer>;
}
