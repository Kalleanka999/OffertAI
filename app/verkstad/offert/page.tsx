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
