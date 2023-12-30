import React from 'react'
import { WordsPage } from '../src/WordsPage'
import { WordContextProvider } from '../src/context/wordsContet'

import { test, describe, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { type UserEvent, userEvent } from '@testing-library/user-event'

interface LocalTestContext {
  user: UserEvent
}

beforeEach<LocalTestContext>((context) => {
  render(
    <WordContextProvider>
      <WordsPage />
    </WordContextProvider>
  )

  const user = userEvent.setup()
  context.user = user
  screen.debug()
})

afterEach(() => {
  cleanup()
})

describe('<OtherPage />', () => {
  test<LocalTestContext>('a list of words should be fetched and rendered when button is cliked', async ({ user }) => {
    if (!user) throw Error('User should be initialized on before Each')

    const button = await screen.findByText('get words!')
    expect(button).toBeDefined()

    await user.click(button)

    const wordsList = await screen.getByRole('list')
    expect(wordsList).toBeDefined()
    screen.debug()
  })
})