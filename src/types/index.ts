
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

// Strapi specific types
export interface StrapiResponse<T> {
  data: StrapiData<T>[] | StrapiData<T>;
  meta: StrapiMeta;
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiProduct {
  name: string;
  price: number;
  description: string;
  brand: string;
  image: {
    data: {
      attributes: {
        url: string;
      }
    }
  };
  specs: {
    processor: string;
    memory: string;
    storage: string;
    display: string;
    os: string;
    warranty: string;
  };
}

export interface CloudServiceConfig {
  region: string;
  endpoint?: string;
}
