import { useContext, useState } from "react"
import { FilterType } from "../types"
import { productsContext } from "../context/productsContext"

export function useProducts() {
  const value = useContext(productsContext)
  if (!value) throw Error('ProductsProvider must wrap this hook use case')
  const { products, setProducts } = value
  const [filters, setFilters] = useState<FilterType>({
    hasDiscount: false,
    name: ''
  })

  const filteredProducts = products.filter(fruit => {
    if (fruit.name.toLowerCase().indexOf(filters.name.toLowerCase()) === -1) return
    if (fruit.hasDiscount && filters.hasDiscount) return
    return fruit
  })

  const handleUpdateFilterName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value
    if (newName.startsWith(' ')) return;
    setFilters({
      ...filters,
      name: newName
    })
  }

  const handleToggleHasDiscount = () => {
    setFilters({
      ...filters,
      hasDiscount: !filters.hasDiscount
    })
  }

  const addProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formInput = event.currentTarget.querySelector('input')
    const productName = formInput?.value!

    if (productName.startsWith(' ') || productName.length === 0) return;

    const newProduct = {
      name: productName,
      hasDiscount: false
    }

    setProducts([
      ...products,
      newProduct
    ])
  }

  return {
    filters,
    products: filteredProducts,
    updateHasDiscount: handleToggleHasDiscount,
    updateSearchBar: handleUpdateFilterName,
    addProduct
  }
}