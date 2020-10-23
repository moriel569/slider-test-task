import React, { useState } from "react";
import "./styles/style.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [img, setImg] = useState([]);

  const runQuery = () => {
    fetch(
      `https://pixabay.com/api/?key=4795060-e28aadd892a615bac02b5104d&q=${query}`
    )
      .then((responce) => responce.json())
      .then(({ hits }) => hits.map({ webformatURL }))
      .then(setImg);
  };

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} />
      <button onClick={runQuery}>Search</button>
    </div>
  );
}
