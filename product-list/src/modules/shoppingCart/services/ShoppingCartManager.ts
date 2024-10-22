import { ProductUser } from "@/models/Product.models";

export class ShoppingCartManager {
  private static readonly KEY_STORAGE = "shoppingCart";

  public static addItem(
    products: ProductUser[],
    newProduct: ProductUser
  ): ProductUser[] {
    const isRepeated = this.verifyProduct(products, newProduct.product.id);

    if (isRepeated === -1) {
      return [...products, newProduct];
    }

    return products.map(({ product, quantity }) =>
      product.id === newProduct.product.id
        ? { product, quantity: quantity + 1 }
        : { product, quantity }
    );
  }

  public static decreaseItem(
    products: ProductUser[],
    id: string
  ): ProductUser[] {
    const product = products.find(({ product }) => product.id === id);

    if (!product) return products;
    if (product.quantity <= 1) return this.removeItem(products, id);

    const newItems = products.map((item) => {
      return item.product.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });

    return newItems;
  }

  public static getTotalPrice(products: ProductUser[]): number {
    return products.reduce((prev, { product, quantity }) => {
      return prev + product.price * quantity;
    }, 0);
  }

  public static getQuantityById(products: ProductUser[], id: string): number {
    const product = products.find(({ product }) => product.id === id);

    return product ? product.quantity : 0;
  }

  public static removeItem(products: ProductUser[], id: string): ProductUser[] {
    return products.filter(({ product }) => product.id !== id);
  }

  public static getKeyStorage(): string {
    return this.KEY_STORAGE;
  }

  private static verifyProduct(products: ProductUser[], id: string): number {
    return products.findIndex(({ product }) => product.id === id);
  }
}
