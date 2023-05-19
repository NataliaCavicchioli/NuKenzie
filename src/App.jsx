import "./App.css";

import Login from "./pages/Login";
import { useState } from "react";
import Logado from "./pages/Logado";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [backup, setBackup] = useState([]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Logado
            setIsLoggedIn={setIsLoggedIn}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            backup={backup}
            setBackup={setBackup}
          />
          <Footer></Footer>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;

//O que não está aqui não será renderizado!
