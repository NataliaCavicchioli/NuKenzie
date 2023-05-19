import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  console.log(listTransactions);

  const sum = listTransactions.reduce((a, b) => a + Number(b.value), 0);

  return (
    <div className="container_total">
      <div className="container_total_text">
        <strong>Valor total:</strong>
        <p className="container_total_text_descricao">
          O valor se refere ao saldo
        </p>
      </div>
      <div>R$ {sum.toFixed(2).replace(".", ",")}</div>
    </div>
  );
};

export default TotalMoney;
