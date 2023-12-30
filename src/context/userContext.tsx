import { createContext } from "react";
// import { userApi } from "../api/user";
export const usernames = ['luca', 'marco', 'diaz', 'luis', 'exequiel', 'aston', 'almada', 'arnaldo', 'andy', 'armando']

interface IUserContext {
  getOneUser: () => Promise<string>
  getUsers: (name: string) => Promise<string[]>
}

export const userContext = createContext<IUserContext | null>(null)

export const UserContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
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
      {children}
    </userContext.Provider>
  )
}