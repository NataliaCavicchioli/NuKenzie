import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "../Button";

import "./style.css";

const Form = ({ listTransactions, setListTransactions, backup, setBackup }) => {
  const [userInputDesc, setUserInputDesc] = useState("");
  const [userInputPrice, setUserInputPrice] = useState(0);
  const [userInputType, setUserInputType] = useState("Entrada");

  const newObj = {
    description: userInputDesc,
    type: userInputType,
  };

  function checkType() {
    newObj.type === "Entrada"
      ? (newObj.value = Number(userInputPrice).toFixed(2))
      : (newObj.value = Number("-" + userInputPrice).toFixed(2));
  }

  checkType();

  const addToList = () => {
    if (userInputDesc && userInputPrice !== "") {
      setListTransactions([...listTransactions, newObj]);
      setBackup([...backup, newObj]);
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="alinhar_label">
        <label htmlFor="descricao" className="label">
          Descrição
        </label>
        <input
          className="input"
          type="text"
          value={userInputDesc}
          onChange={(event) => setUserInputDesc(event.target.value)}
          placeholder="Digite aqui sua descrição"
          required
        />
        <p className="input_exemplo">Ex: Compra de roupas</p>
      </div>
      <div className="alinhar_container_label">
        <div className="alinhar_label">
          <FormControl variant="outlined">
            <label htmlFor="preco" className="label">
              Preço
            </label>
            <OutlinedInput
              required
              id="outlined-adornment-weight"
              className="input"
              type="text"
              value={userInputPrice}
              endAdornment={<InputAdornment position="end">R$</InputAdornment>}
              onChange={(event) => setUserInputPrice(event.target.value)}
              aria-describedby="outlined-price-helper-text"
            />
          </FormControl>
        </div>
        <div className="alinhar_label">
          <label htmlFor="tipoDeValor" className="label">
            Tipo de valor
          </label>
          <select
            className="input"
            onChange={(event) => setUserInputType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <div className="container_btn_form">
        <Button
          handleClick={() => addToList()}
          color="#fff"
          backgroundColor="#fd377e"
        >
          Inserir valor
        </Button>
      </div>
    </form>
  );
};

export default Form;
