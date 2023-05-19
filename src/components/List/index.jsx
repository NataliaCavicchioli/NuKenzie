import Card from "../Card";

const List = ({ listTransactions, setListTransactions, backup, setBackup }) => {
  return (
    <>
      {listTransactions.map((transaction, index) => (
        <Card
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          transaction={transaction}
          key={index}
          backup={backup}
          setBackup={setBackup}
        />
      ))}
    </>
  );
};

export default List;
