export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface ProductUser {
  product: Product;
  quantity: number;
}

export type ProductItem = Pick<Product, "name" | "price" | "id"> & {
  quantity: number;
};
