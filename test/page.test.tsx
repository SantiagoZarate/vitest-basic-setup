import React from 'react'
import { OtherPage } from '../src/OtherPage'
import { userContext, usernames } from '../src/context/userContext'

import { test, describe, expect, beforeEach, beforeAll, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { type UserEvent, userEvent } from '@testing-library/user-event'

interface LocalTestContext {
  user: UserEvent
}

beforeEach<LocalTestContext>((context) => {
  render(
    <userContext.Provider value={
      {
        getOneUser: async () => {
          return 'javier'
        },
        getUsers: async (name: string) => {
          const users = usernames.filter(user => {
            return user.toLowerCase().indexOf(name.toLowerCase()) !== -1
          })
          return users
        }
      }
    }>
      <OtherPage />
    </userContext.Provider>
  )

  const user = userEvent.setup()
  context.user = user
  screen.debug()
})

afterEach(() => {
  console.log("Limpiando los anteriores renders")
  cleanup()
})

describe('<OtherPage />', () => {
  test<LocalTestContext>('javier name should appears when clicking the first button', async ({ user }) => {
    if (!user) throw Error('User should be initialized on before Each')

    const button = await screen.findByText('Click Me!')
    expect(button).toBeDefined()

    await user.click(button)

    const newUserName = screen.getByText('javier')
    expect(newUserName).toBeDefined()
  })

  test<LocalTestContext>('list name filtered using input field', async ({ user }) => {
    if (!user) throw Error('User should be initialized on before Each')

    const form = await screen.findByRole('form')
    expect(form).toBeDefined()

    const inputField = form.querySelector('input')!
    expect(inputField).toBeDefined()

    const formButton = form.querySelector('button')!
    expect(formButton).toBeDefined()

    await user.type(inputField, 'ar')
    await user.click(formButton)

    const usernameList = await screen.findByRole('list')
    expect(usernameList).toBeDefined()
    expect(usernameList.childElementCount).toEqual(3)
  })
})