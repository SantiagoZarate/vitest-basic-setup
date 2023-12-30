// import { OtherPage } from "./OtherPage";
import { WordsPage } from "./WordsPage";
// import { UserContextProvider } from "./context/userContext";
import { WordContextProvider } from "./context/wordsContet";

export default function App() {
  return (
    <>
    {/* <UserContextProvider>
      <OtherPage />
    </UserContextProvider> */}

    <WordContextProvider>
      <WordsPage />
    </WordContextProvider>
    </>
  )
}