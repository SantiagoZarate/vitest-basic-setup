import { usernames } from "../context/userContext"

class UserApi {
  constructor() {
  }

  async getUsers(name: string): Promise<string> {
    return usernames.includes(name)
      ? name
      : 'no one'
  }
}

export const userApi = new UserApi()