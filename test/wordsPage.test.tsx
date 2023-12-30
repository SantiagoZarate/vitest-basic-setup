import React from 'react'
import { WordsPage } from '../src/WordsPage'
import { WordContextProvider } from '../src/context/wordsContet'

import { test, describe, expect, beforeEach, afterEach, expectTypeOf } from 'vitest'
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
