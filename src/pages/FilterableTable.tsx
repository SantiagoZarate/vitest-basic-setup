import { useProducts } from "../hooks/useProducts"

export function FilterableTable() {
  const { filters, products, updateHasDiscount, updateSearchBar } = useProducts()

  return (
    <article>
      <header>
        <label htmlFor="">
          <input
            value={filters.name}
            onChange={updateSearchBar}
            type="text" />
        </label>
        <label htmlFor="">
          <input
            onChange={updateHasDiscount}
            checked={filters.hasDiscount}
            type="checkbox" />
          show products with offer
        </label>
      </header>
      <ul>
        {
          products.map(fruit => (
            <li key={fruit.name}>{fruit.name}</li>
          ))
        }
      </ul>
    </article>
  )
}

