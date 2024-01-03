import React, { useState } from 'react'
import { fruitList4elements, fruitList1elements } from '../src/data/fruitLists'
import { FilterableTable } from '../src/pages/FilterableTable'
import { productsContext } from '../src/context/productsContext'

import { test, describe, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { type UserEvent, userEvent } from '@testing-library/user-event'
import { Product } from '../src/types'

interface LocalTestContext {
  user: UserEvent,
}

describe('rendering a product list and filtering products', () => {
  beforeEach<LocalTestContext>(async (context) => {
    const [products, setProducts] = useState<Product[]>(fruitList4elements);
    render(
      <productsContext.Provider value={{
        products,
        setProducts
      }}>
        <FilterableTable />
      </productsContext.Provider>
    )

    const user = userEvent.setup()
    context.user = user;
  })

  afterEach(() => {
    cleanup()
  })

  test<LocalTestContext>('List should have 4 products', async () => {
    const list = await screen.findByRole('list')
    expect(list).toBeDefined()
    expect(list.childElementCount).toBe(4)
  })

  test<LocalTestContext>('filter by discounts should show 2 results', async ({ user }) => {
    const checkbox = await screen.findByRole('checkbox');
    expect(checkbox).toBeDefined()

    await user.click(checkbox)

    const list = await screen.findByRole('list')
    expect(list).toBeDefined()
    expect(list.childElementCount).toBe(2)
  })
})

describe('product lists with 1 elements', () => {
  beforeEach<LocalTestContext>(async (context) => {
    const [products, setProducts] = useState<Product[]>(fruitList1elements);
    render(
      <productsContext.Provider value={{
        products,
        setProducts
      }}>
        <FilterableTable />
      </productsContext.Provider>
    )

    const user = userEvent.setup()
    context.user = user;
  })

  afterEach(() => {
    cleanup()
  })

  test<LocalTestContext>('list should not be rendered', async () => {
    const list = await screen.findByRole('list')
    expect(list.childElementCount).toBe(1)
  })
})