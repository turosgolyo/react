import { useParams } from "react-router-dom";

const Param = () => {
  const { kategoria, nev } = useParams();

  return (
    <>
      <h1>Kategoria: {kategoria}</h1>
      <h2>Nev: {nev}</h2>
    </>
  );
};

export default Param;
