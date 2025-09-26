import { useEffect, useState } from "react";

function App() {
  const [magassag, setMagassag] = useState<number>(0);
  const [suly, setSuly] = useState<number>(0);
  const [eredmeny, setEredmeny] = useState<String>("");

  useEffect(() => {
    const bmi = suly / Math.pow(magassag / 100, 2);
    console.log(bmi);

    if (bmi <= 15.9) {
      setEredmeny(
        "Az állapotod: Súlyos soványság (BMI: " + bmi.toFixed(1) + ")"
      );
    } else if (bmi <= 16.9) {
      setEredmeny(
        "Az állapotod: Mérsékelt soványság (BMI: " + bmi.toFixed(1) + ")"
      );
    } else if (bmi <= 18.4) {
      setEredmeny(
        "Az állapotod: Enyhe soványság (BMI: " + bmi.toFixed(1) + ")"
      );
    } else if (bmi <= 24.9) {
      setEredmeny(
        "Az állapotod: Normál testsúly (BMI: " + bmi.toFixed(1) + ")"
      );
    } else if (bmi <= 29.9) {
      setEredmeny("Az állapotod: Túlsúlyos (BMI: " + bmi.toFixed(1) + ")");
    } else if (bmi <= 34.9) {
      setEredmeny(
        "Az állapotod: Elhízott (I. fokú) (BMI: " + bmi.toFixed(1) + ")"
      );
    } else if (bmi <= 39.9) {
      setEredmeny(
        "Az állapotod: Elhízott (II. fokú) (BMI: " + bmi.toFixed(1) + ")"
      );
    } else {
      setEredmeny(
        "Az állapotod: Elhízott (III. fokú) (BMI: " + bmi.toFixed(1) + ")"
      );
    }
  }),
    [magassag, suly];

  return (
    <>
      <h1>BMI-kalkulátor</h1>
      <div>
        <p>
          Magasság (cm)
          <input
            type="number"
            onChange={(e) => setMagassag(Number(e.target.value))}
          />
        </p>
        <p>
          Súly (kg)
          <input
            type="number"
            onChange={(e) => setSuly(Number(e.target.value))}
          />
        </p>
        <p>{eredmeny}</p>
      </div>
    </>
  );
}

export default App;
