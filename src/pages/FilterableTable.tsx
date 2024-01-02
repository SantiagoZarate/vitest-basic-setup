import { useState } from "react"

export const fruits = [
  {
    name: 'orange',
    hasDiscount: true,
  },
  {
    name: 'onion',
    hasDiscount: false,
  },
  {
    name: 'banana',
    hasDiscount: false,
  },
  {
    name: 'apple',
    hasDiscount: true,
  },
]

type FilterType = {
  name: string,
  hasDiscount: boolean,
}

export function FilterableTable() {
  const [filters, setFilters] = useState<FilterType>({
    hasDiscount: false,
    name: ''
  })

  const filteredProducts = fruits.filter(fruit => {
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

  return (
    <article>
      <header>
        <label htmlFor="">
          <input
            value={filters.name}
            onChange={handleUpdateFilterName}
            type="text" />
        </label>
        <label htmlFor="">
          <input
            onChange={handleToggleHasDiscount}
            checked={filters.hasDiscount}
            type="checkbox" />
          show products with offer
        </label>
      </header>
      <ul>
        {
          filteredProducts.map(fruit => (
            <li key={fruit.name}>{fruit.name}</li>
          ))
        }
      </ul>
    </article>
  )
}

