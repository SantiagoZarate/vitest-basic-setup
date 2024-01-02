// import { OtherPage } from "./OtherPage";
// import { UserContextProvider } from "./context/userContext";
// import { WordsPage } from "./WordsPage";
// import { WordContextProvider } from "./context/wordsContet";
import { ProductsProvider } from "./context/productsContext";
import { FilterableTable } from "./pages/FilterableTable";

export default function App() {
  return (
    <>
      {/* <UserContextProvider>
      <OtherPage />
    </UserContextProvider> */}

      {/* <WordContextProvider>
      <WordsPage />
    </WordContextProvider> */}

      <ProductsProvider>
        <FilterableTable />
      </ProductsProvider>
    </>
  )
}