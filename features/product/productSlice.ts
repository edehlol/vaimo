import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Product, { Option } from '../../Product';

export const productSlice = createSlice({
  name: 'product',
  initialState: {} as Product,
  reducers: {
    setProduct: (state, action) => action.payload,
    addToQuantity: (state, action) => {
      const { productId } = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export const selectOption = (state: RootState, productId: Option['id']) => {
  const options = Object.keys(state.product.options);
  return state.product.options;
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

export default productSlice.reducer;
