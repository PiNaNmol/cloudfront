
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { strapiService, useRealApi } from '@/config/appConfig';
import { products as localProducts } from '@/data/products';
import { Product, StrapiProduct, StrapiResponse } from '@/types';

// Helper to convert Strapi product format to our app format
const convertStrapiProduct = (strapiProduct: StrapiResponse<StrapiProduct>): Product[] => {
  return strapiProduct.data.map(item => ({
    id: String(item.id),
    name: item.attributes.name,
    price: item.attributes.price,
    image: item.attributes.image.data?.attributes.url || '/lovable-uploads/ccfff0ea-8c72-4fc3-9b9c-06b6147a4816.png',
    brand: item.attributes.brand,
    description: item.attributes.description,
    specs: item.attributes.specs
  }));
};

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      if (useRealApi) {
        const data = await strapiService.fetchProducts();
        return convertStrapiProduct(data);
      }
      // Fall back to local data if not using real API
      return localProducts;
    },
  });

  return {
    products: data || [],
    isLoading,
    error,
  };
};

export const useProduct = (productId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      if (useRealApi) {
        const data = await strapiService.fetchProductById(productId);
        return convertStrapiProduct({ data: [data.data] })[0];
      }
      // Fall back to local data if not using real API
      return localProducts.find(product => product.id === productId);
    },
    enabled: !!productId,
  });

  return {
    product: data,
    isLoading,
    error,
  };
};
