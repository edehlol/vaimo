import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import { CartItem, selectCartItems, selectCurrency } from '../features/product/productSlice';
import { Option } from '../Product';
import Text from './Text';

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
`;
const ProductItemContainer = styled.li`
  list-style: none;
  border-bottom: 1px solid #e6e7eb;
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
`;
const TotalContainer = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
`;

const ProductItem = ({
  label,
  quantity,
  price,
  currency,
}: {
  label: Option['label'];
  quantity: Option['quantity'];
  price: Option['price']['value'];
  currency: Option['price']['currency']['symbol'];
}) => {
  return (
    <ProductItemContainer>
      <Text>{label}</Text>

      <Text>
        {currency} {(quantity * price).toFixed(2)}
      </Text>
    </ProductItemContainer>
  );
};

export default function Cart() {
  const currency = useAppSelector(selectCurrency);
  const cartItems = useAppSelector(selectCartItems);
  console.log(cartItems);
  const totalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const renderCartItems = () => {
    return cartItems.map((item: CartItem) => (
      <ProductItem
        key={item.productId}
        label={item.label}
        quantity={item.quantity}
        price={item.price}
        currency={currency}
      />
    ));
  };
  return (
    <div>
      {cartItems.length > 0 && (
        <>
          <Text weight="bold" size="large" color="orange">
            Summary
          </Text>
          <ProductList>
            {renderCartItems()}
            <TotalContainer>
              <Text weight="semibold">Grand Total:</Text>
              <Text weight="semibold">
                {currency} {totalCost()}
              </Text>
            </TotalContainer>
          </ProductList>
        </>
      )}
    </div>
  );
}
