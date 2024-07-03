"use client";

import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  SKU: number;
  Name: string;
  Description: string;
  Title: string;
  Gender: number;
  Retail:number;
  Image_1:string;
  Url:string;
  Quantity:number;
  Size:number;
//   supplier:string;
  price:number;
}

interface ProductContextType {
  products: Product[];
  loading: boolean;
}

const defaultValue: ProductContextType = {
  products: [],
  loading: true,
};

export const ProductContext = createContext<ProductContextType>(defaultValue);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>(defaultValue.products);
  const [loading, setLoading] = useState<boolean>(defaultValue.loading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50');
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
