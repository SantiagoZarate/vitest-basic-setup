import { useWordsApi } from "./hooks/useWordsApi"

export function WordsPage() {
  const { handleGetWords, words } = useWordsApi()

  return (
    <div>
      <button
        onClick={handleGetWords}>
        get words!
      </button>
      {
        words &&
        <ul>
          {words.map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      }
    </div>
  )
}