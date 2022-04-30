import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Product, { Option } from '../../Product';

export const productSlice = createSlice({
  name: 'product',
  initialState: {} as Product,
  reducers: {
    setProduct: (state, action) => action.payload,
    addToQuantity: (state, action) => {
      const option = state.options.find((option) => option.id === action.payload);
      if (option) {
        option.quantity++;
      }
    },
    subtractFromQuantity: (state, action) => {
      const option = state.options.find((option) => option.id === action.payload);
      if (option && option.quantity > 0) {
        option.quantity--;
      }
    },
    setQuantity: (state, action) => {
      const { optionId, quantity } = action.payload;
      const option = state.options.find((option) => option.id === optionId);
      if (option) {
        option.quantity = quantity;
      }
    },
    validateQuantity: (state, action) => {
      const { optionId, quantity } = action.payload;
      const option = state.options.find((option) => option.id === optionId);
      if (option) {
        option.quantity < 0
          ? (option.quantity = 0)
          : option.quantity === null || option.quantity === undefined
          ? (option.quantity = 0)
          : quantity;
      }
    },
  },
});

export const { setProduct, addToQuantity, subtractFromQuantity, setQuantity, validateQuantity } =
  productSlice.actions;

export const selectQuantity = (state: RootState, productId: Option['id']) => {
  return state.product.options.find((option) => option.id === productId)?.quantity;
  // const id = options.find((key: string) => state.product.options[key].id === productId);
  // return state.product.options[id];
};

export const selectProductImage = (state: RootState) => state.product.gallery[0].main;

export const selectReadyToShip = (state: RootState) => state.product.shipping.props.ready_to_ship;
export const selectInStock = (state: RootState) => state.product.shipping.props.in_stock;
export const selectFastDispatch = (state: RootState) => state.product.shipping.props.fast_dispatch;

export const selectName = (state: RootState) => state.product.name;
export const selectTags = (state: RootState) => state.product.tags;

export const selectRating = (state: RootState) => state.product.reviews.rating;
export const selectCount = (state: RootState) => state.product.reviews.count;
export const selectTotalBuyers = (state: RootState) => state.product.reviews.total_buyers;

export const selectCurrency = (state: RootState) => state.product.options[0].price.currency.symbol;
export const selectLowestPrice = (state: RootState) => {
  // const options = Object.keys(state.product.options);
  // const prices = options.map((option) => {
  //   return state.product.options[option].price.value;
  // });
  const prices = state.product.options.map((option) => option.price.value);
  return Math.min(...prices);
};
export const selectHighestPrice = (state: RootState) => {
  // const options = Object.keys(state.product.options);
  // const prices = options.map((option) => {
  //   return state.product.options[option].price.value;
  // });
  const prices = state.product.options.map((option) => option.price.value);
  return Math.max(...prices);
};
export const selectOldLowestPrice = (state: RootState) => {
  // const options = Object.keys(state.product.options);
  // const prices = options.map((option) => {
  //   return state.product.options[option].old_price.value;
  // });
  const prices = state.product.options.map((option) => option.old_price.value);
  return Math.min(...prices);
};
export const selectOldHighestPrice = (state: RootState) => {
  // const options = Object.keys(state.product.options);
  // const prices = options.map((option) => {
  //   return state.product.options[option].old_price.value;
  // });
  const prices = state.product.options.map((option) => option.old_price.value);
  return Math.max(...prices);
};

export const selectDiscount = (state: RootState) => state.product.discount.amount;
export const selectDiscountEndDate = (state: RootState) => state.product.discount.end_date;

export const selectOptions = (state: RootState) => {
  // const options = Object.keys(state.product.options);
  // return options.map((option) => {
  //   return state.product.options[option];
  // });
  return state.product.options;
};

export const selectShippingCost = (state: RootState) => state.product.shipping.method.cost.value;
export const selectLeadTime = (state: RootState) => state.product.shipping.lead_time.value;
export const selectShippingTime = (state: RootState) =>
  state.product.shipping.method.shipping_time.value;
export const selectLeadInfo = (state: RootState) => state.product.shipping.lead_time.info;
export const selectShippingInfo = (state: RootState) =>
  state.product.shipping.method.shipping_time.info;

export interface CartItem {
  label: Option['label'];
  productId: Option['id'];
  quantity: Option['quantity'];
  price: Option['price']['value'];
}
export const selectCartItems = (state: RootState) => {
  const cartItems: CartItem[] = [];
  state.product.options.forEach((option) => {
    if (option.quantity > 0) {
      cartItems.push({
        label: option.label,
        productId: option.id,
        quantity: option.quantity,
        price: option.price.value,
      });
    }
  });
  return cartItems;
};

export default productSlice.reducer;
