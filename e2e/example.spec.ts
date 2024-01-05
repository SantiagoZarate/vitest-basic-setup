import { test, expect } from '@playwright/test';
import { LoadFnOutput } from 'module';
const USERS_API = "https://randomuser.me/api/"

type ResponseAPI = {
  results: { [key: string]: any }[]
  ,
  info: {
    [key: string]: any
  }
}

let infoData: ResponseAPI;

test.describe('testing GET request', () => {
  test.beforeAll(async ({ request }) => {
    const response = await request.get(USERS_API, {
      params: {
        seed: 'santi',
        results: 10
      }
    })

    expect(response.ok()).toBeTruthy()
    const json: ResponseAPI = await response.json()
    infoData = json;
  })

  test('fetch data from API REST', async () => {
    expect(infoData.info).toStrictEqual({
      "seed": "santi",
      "results": 10,
      "page": 1,
      "version": "1.4"
    })
  })

  test('results should have 10 results', async () => {
    expect(infoData.results).toHaveLength(10)
  })
})
