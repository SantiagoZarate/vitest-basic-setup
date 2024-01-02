import { PropsWithChildren, createContext } from "react";
import { Product } from "../types";
// import { fruits } from "../data/fruitLists";

interface IProductsContext {
  products: Product[]
}

export const productsContext = createContext<IProductsContext | null>(null)

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  return(
    <productsContext.Provider value={{
      products : []
    }}>
      {children}
    </productsContext.Provider>
  )
}