interface Price {
  value: number;
  currency: {
    code: string;
    symbol: string;
    format: string;
  };
}
export default interface Product {
  name: string;
  tags: string[];
  options: {
    [key: string]: {
      label: string;
      price: Price;
      old_price: Price;
    };
  };
  discount: {
    amount: string;
    end_date: string;
  };
  gallery: {
    main: string;
  }[];
  shipping: {
    lead_time: {
      value: string;
      info: string;
    };
    method: {
      country: string;
      title: string;
      shipping_time: {
        value: string;
        info: string;
      };
      cost: Price;
    };
  };

  props: {
    ready_to_ship: boolean;
    in_stock: boolean;
    fast_dispatch: boolean;
  };

  reviews: {
    rating: string;
    count: number;
    total_buyers: number;
  };
}
