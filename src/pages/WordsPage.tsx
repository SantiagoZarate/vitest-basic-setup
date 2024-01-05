import { useWordsApi } from "../hooks/useWordsApi"

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
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      }
    </div>
  )
}