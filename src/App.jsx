import { useState } from "react";

function App() {
  // const [text, setText] = useState("");
  const [like, setLike] = useState(false);

  function addLike() {
    setLike(true);
  }

  function addDislike() {
    setLike(false);
  }

  return (
    <div>
      <h1>Like / Dislike</h1>

      <p> {like ? "Like 👍" : "Dislike 👎"}</p>

      <button onClick={addLike}>Like</button>
      <button onClick={addDislike}>Dislike</button>
    </div>
  );
}

export default App;
