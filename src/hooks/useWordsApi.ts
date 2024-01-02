import { useContext, useState } from "react"
import { wordContext } from "../context/wordsContet"

export function useWordsApi(){
  const value = useContext(wordContext)
  const [words, setWords] = useState<string[]>([])

  if(!value) throw Error("Context not allowed to be used here, be sure to wrapped your component with Words Provider")

  const handleGetWords =  async () => {
    const words = await value.getWords();
    setWords(words)
  }

  return {
    handleGetWords,
    words
  }
}