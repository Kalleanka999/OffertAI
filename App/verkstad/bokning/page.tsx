"use client";
import { useState } from "react";

export default function Bokning() {
  const [msg, setMsg] = useState("");

  function submit() {
    setMsg("Bokning mottagen!");
  }

  return (
    <main className="container">
      <h2>Boka verkstadstid</h2>

      <input placeholder="Namn" />
      <input placeholder="Telefon" />
      <input type="date" />

      <button onClick={submit}>Boka</button>

      {msg}
    </main>
  );
}
