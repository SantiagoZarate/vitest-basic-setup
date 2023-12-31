import { PropsWithChildren, createContext } from "react";
import { getWords } from "../api/word";

interface IWordContext {
  getWords: () => Promise<string[]>
}

export const wordContext = createContext<IWordContext | null>(null)

export const WordContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <wordContext.Provider value={
      {
        getWords
      }
    }>
      {children}
    </wordContext.Provider>
  )
}