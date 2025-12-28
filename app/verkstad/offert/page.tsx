"use client";

import { useState } from "react";

export default function OffertPage() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setResult(null);

    // TEMPORÄRT MVP-svar
    setTimeout(() => {
      setResult(
        "Preliminär offert: 3 000 – 5 000 kr. Exakt pris fastställs efter felsökning."
      );
      setLoading(false);
    }, 1000);
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <h1>AI-offert för bilverkstad</h1>

      <label>Beskriv problemet</label>
      <textarea
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        style={{ width: "100%", height: 120, marginBottom: 16 }}
      />

      <button onClick={submit} disabled={loading}>
        {loading ? "Beräknar..." : "Få offert"}
      </button>

      {result && (
        <div style={{ marginTop: 24, padding: 16, border: "1px solid #ddd" }}>
          {result}
        </div>
      )}
    </main>
  );
}
