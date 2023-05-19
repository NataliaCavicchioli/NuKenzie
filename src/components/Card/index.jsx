import "./style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({
  listTransactions,
  setListTransactions,
  transaction,
  backup,
  setBackup,
}) => {
  const removeFromList = (toRemove) => {
    const newList = listTransactions.filter((item) => item !== toRemove);
    setListTransactions(newList);

    const newListBackup = backup.filter((item) => item !== toRemove);
    setBackup(newListBackup);
  };

  console.log(transaction);
  return (
    <>
      {transaction.type === "Entrada" ? (
        <div className="container_cards green">
          <div className="container_card_description">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
          </div>
          <div className="container_card_value">
            <p>R$ {transaction.value.replace(".", ",")}</p>
            <button onClick={() => removeFromList(transaction)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ) : (
        <div className="container_cards gray">
          <div className="container_card_description">
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
          </div>
          <div className="container_card_value">
            <p>R$ {transaction.value.replace(".", ",")}</p>
            <button onClick={() => removeFromList(transaction)}>
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
