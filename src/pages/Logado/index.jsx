import EmptyList from "../../components/EmptyList";
import Filtro from "../../components/Filtro";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import List from "../../components/List";
import TotalMoney from "../../components/TotalMoney";

import "./style.css";

const Logado = ({
  setIsLoggedIn,
  listTransactions,
  setListTransactions,
  backup,
  setBackup,
}) => {
  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn}></Header>
      <div className="container_form_filtro">
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setBackup={setBackup}
            backup={backup}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </div>
        <div className="container_filtro_list">
          <Filtro
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            backup={backup}
            setBackup={setBackup}
          ></Filtro>
          {listTransactions.length > 0 ? (
            <>
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                backup={backup}
                setBackup={setBackup}
              ></List>
            </>
          ) : (
            <>
              <EmptyList></EmptyList>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Logado;
