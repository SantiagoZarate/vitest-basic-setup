import { PropsWithChildren, createContext, useState } from "react";
import { Product } from "../types";
// import { fruits } from "../data/fruitLists";

interface IProductsContext {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export const productsContext = createContext<IProductsContext | null>(null)

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  
  return (
    <productsContext.Provider value={{
      products,
      setProducts
    }}>
      {children}
    </productsContext.Provider>
  )
}