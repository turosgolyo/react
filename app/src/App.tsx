import { useEffect, useState } from "react";

function App() {
  const [elsoSzam, setElsoSzam] = useState<number>(0);
  const [masodikSzam, setMasodikSzam] = useState<number>(0);
  const [muvelet, setMuvelet] = useState<string>("");
  const [eredmeny, setEredmeny] = useState<string>("");

  useEffect(() => {
    console.log(new Date());
    if (muvelet == "+") {
      setEredmeny(`Az eredmeny: ${elsoSzam + masodikSzam}`);
    } else if (muvelet == "-") {
      setEredmeny(`Az eredmeny: ${elsoSzam - masodikSzam}`);
    } else if (muvelet == "/") {
      setEredmeny(`Az eredmeny: ${elsoSzam / masodikSzam}`);
    } else {
      setEredmeny(`Az eredmeny: ${elsoSzam * masodikSzam}`);
    }
  }, [elsoSzam, masodikSzam, muvelet]);

  return (
    <>
      <div>
        <input
          type="number"
          onChange={(e) => setElsoSzam(Number(e.target.value))}
        />
        <select onChange={(e) => setMuvelet(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          type="number"
          onChange={(e) => setMasodikSzam(Number(e.target.value))}
        />
        <br />
        <div>Az eredmény: {eredmeny}</div>
      </div>

      <h1>{eredmeny}</h1>
    </>
  );
}

export default App;
