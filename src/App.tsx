import { OtherPage } from "./OtherPage";
import { UserContextProvider } from "./context/userContext";

export default function App() {
  return (
    <UserContextProvider>
      <OtherPage />
    </UserContextProvider>
  )
}