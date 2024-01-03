import { useProducts } from "../hooks/useProducts"

export function FilterableTable() {
  const { filters, products, updateHasDiscount, updateSearchBar, addProduct } = useProducts()

  return (
    <article>
      <header>
        <label htmlFor="">
          <input
            value={filters.name}
            onChange={updateSearchBar}
            type="text" />
        </label>
        <label htmlFor="check">
          <input
            id="check"
            placeholder="Filtrar..."
            onChange={updateHasDiscount}
            checked={filters.hasDiscount}
            type="checkbox" />
          show products with offer
        </label>
      </header>
      {products?.length > 0 &&
        <ul>
          {
            products.map(fruit => (
              <li key={fruit.name}>{fruit.name}</li>
            ))
          }
        </ul>}
      <form onSubmit={addProduct} action="">
        <input
        placeholder="crear producto..."
        type="text" />
        <button>
          crear
        </button>
      </form>
    </article>
  )
}

