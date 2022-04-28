import Image from 'next/image';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { selectOption, selectOptions } from '../features/product/productSlice';
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
}
const QuantityButton = styled.div<QuantityButtonProps>`
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

const Quantity = ({ optionId }: { optionId: Option['id'] }) => {
  const option = useAppSelector((state: RootState) => selectOption(state, optionId));
  console.log(option);
  return (
    <QuantityContainer>
      <QuantityButton minus>
        <Image src="/icons/minus.png" width="14px" height="2px" alt="minus" />
      </QuantityButton>
      <Input defaultValue={0} />
      <QuantityButton plus>
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
          {currency} {value}
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
