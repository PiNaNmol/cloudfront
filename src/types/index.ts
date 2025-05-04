
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  description: string;
  specs: {
    processor: string;
    memory: string;
    storage: string;
    display: string;
    os: string;
    warranty: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
