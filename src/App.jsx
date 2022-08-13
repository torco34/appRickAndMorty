import { useState } from "react";
import { Parent } from "./components/Parent";

function App() {
  const [user, setUser] = useState({
    name: "juan",
    age: 35,
  });
  return (
    <div className="app">
      <Parent userData={user} setUser={setUser} />
    </div>
  );
}

export default App;
