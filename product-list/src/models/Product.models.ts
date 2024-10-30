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
  thumbnail: string;
};

export interface Translation {
  id: string;
  language: string;
  name: string;
  category: string;
}

export interface ProductTranslation {
  id: string;
  language: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  translationIds: string[];
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
