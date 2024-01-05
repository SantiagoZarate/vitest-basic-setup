import { useState } from "react";
import { useUsersApi } from "../hooks/useUsersApi"

export function OtherPage() {
  const { getOneUser, getUsers } = useUsersApi();
  const [user, setUser] = useState('');
  const [users, setUsers] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleClick = async () => {
    const newUser = await getOneUser()
    setUser(newUser)
  }

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    if (newText.startsWith(" ")) return
    setInput(newText)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newUsers = await getUsers(input);
    setUsers(newUsers);
  }

  return (
    <div>
      <h1>Prueba del context</h1>
      <button
        id="random-user-btn"
        onClick={handleClick}>
        Click Me!
      </button>

      <form
        aria-label="form"
        onSubmit={handleSubmit} >
        <label htmlFor="">
          <input
            onChange={updateInput}
            value={input}
            type="text" />
        </label>
        <button
          id="submit-form-btn"
          type="submit">
          enviar
        </button>
      </form>
      {user && <p id="user" aria-label="Showing user name">{user}</p>}
      {
        users &&
        <ul>
          {users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      }
    </div>
  )
}