import Button from "../Button";
// import { useState } from "react";
import "./style.css";

const Filtro = ({
  listTransactions,
  setListTransactions,
  backup,
  setBackup,
}) => {
  const showIncome = () => {
    let arrEntradas = backup.filter(
      (transaction) => transaction.type === "Entrada"
    );
    setListTransactions(arrEntradas);
  };

  const showOutcome = () => {
    let arrSaidas = backup.filter(
      (transaction) => transaction.type === "Saída"
    );
    setListTransactions(arrSaidas);
  };

  const showAll = () => {
    setListTransactions(backup);
  };

  return (
    <div className="container_filtro">
      <h4>Resumo financeiro</h4>
      <div className="container_btn_filtro">
        <div className="container_btn_todos_filtro">
          <Button handleClick={showAll} color="#fff" backgroundColor="#fd377e">
            Todos
          </Button>
        </div>
        <div className="container_btn_transacao_filtro">
          <Button handleClick={showIncome}>Entradas</Button>
        </div>
        <div className="container_btn_transacao_filtro">
          <Button handleClick={showOutcome}>Despesas</Button>
        </div>
      </div>
    </div>
  );
};

export default Filtro;
