import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Főoldal</h1>
      <button onClick={() => navigate("/bmi")}>BMI Kalkulátor</button>
      <button></button>
      <button></button>
      <button></button>
    </>
  );
}

export default App;
