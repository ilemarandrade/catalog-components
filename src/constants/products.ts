export interface Product {
  sold_quantity: number;
  price: number;
  name: string;
  stock: number;
  total_sales: number;
}

export type Products = {
  [key: string]: Product;
};

const products: Products = {
  jordan_1_retro_high: {
    sold_quantity: 0,
    price: 170.0,
    name: "Jordan 1",
    stock: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
    total_sales: 0,
  },
  jordan_4_retro: {
    sold_quantity: 0,
    price: 190.0,
    name: "Jordan 4",
    stock: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
    total_sales: 0,
  },
  jordan_6_retro: {
    sold_quantity: 0,
    price: 200.0,
    name: "Jordan 6",
    stock: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
    total_sales: 0,
  },
  iphone_14: {
    sold_quantity: 0,
    price: 40.99,
    name: "iPhone 14",
    stock: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
    total_sales: 0,
  },
  samsung_galaxy_s21: {
    sold_quantity: 0,
    price: 50.99,
    name: "Galaxy S21",
    stock: Math.floor(Math.random() * (1000 - 20 + 1)) + 20,
    total_sales: 0,
  },
};

export default products;
