"use client";

import { useState } from "react";

export default function OffertPage() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    setResult(null);

    const res = await fetch("/api/offert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ problem }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main
      style={{
        maxWidth: 720,
        margin: "40px auto",
        padding: 32,
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>
        AI-offert för bilverkstäder
      </h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        Få en preliminär kostnadsuppskattning baserad på bilens problem.
      </p>

      <label style={{ fontWeight: 600 }}>Beskriv problemet</label>
      <textarea
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Ex: Skrapande ljud vid inbromsning, känns i ratten..."
        style={{
          width: "100%",
          height: 140,
          marginTop: 8,
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 16,
        }}
      />

      <button
        onClick={submit}
        disabled={loading || !problem}
        style={{
          background: "#111827",
          color: "white",
          padding: "12px 20px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Beräknar offert..." : "Generera offert"}
      </button>

      {result && (
        <div
          style={{
            marginTop: 32,
            padding: 20,
            background: "#f9fafb",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
          }}
        >
          <strong>Preliminär offert</strong>
          <p style={{ marginTop: 8 }}>{result}</p>
        </div>
      )}
    </main>
  );
}
