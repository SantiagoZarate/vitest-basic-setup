import React from 'react'
import { WordsPage } from '../src/WordsPage'
import { WordContextProvider } from '../src/context/wordsContet'

import { test, describe, expect, beforeEach, afterEach, expectTypeOf, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { type UserEvent, userEvent } from '@testing-library/user-event'

interface LocalTestContext {
  user: UserEvent
}

describe('Fetching 10 words using an API Rest', () => {
  let response: Response;
  let body: Array<{ [key: string]: any }>;

  beforeEach(async () => {
    response = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    body = await response.json()
  })

  afterEach(() => {
    cleanup()
  })

  test('Response should be succesfull', () => {
    expect(response.status).toBe(200)
  })

  test('Should have content-type', () => {
    expect(response.headers.get('Content-Type')).toBe('application/json')
  })

  test('Response should be succesfull', () => {
    expectTypeOf(body).toBeArray()
  })

  test('Body should contains 10 words', () => {
    expect(body.length).toBe(10)
  })
})


describe('Rendering component calling word API Rest', () => {
  beforeEach<LocalTestContext>((context) => {
    const mockResponse = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      } as Response)
    })

    render(
      <WordContextProvider>
        <WordsPage />
      </WordContextProvider>
    )
    const user = userEvent.setup()
    context.user = user;
  })

  test<LocalTestContext>('Body should contains 10 words', async ({ user }) => {
    const button = await screen.findByText(/get words/i)
    expect(button).toBeDefined()

    await user.click(button)

    const wordsList = await screen.findByRole('list')
    expect(wordsList).toBeDefined()
    expect(wordsList.childElementCount).toBe(10)

    screen.debug()
  })
})
