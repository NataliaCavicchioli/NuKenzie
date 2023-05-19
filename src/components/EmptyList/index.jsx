import emptyImg from "../../assets/NoCard.svg";

const EmptyList = () => {
  return (
    <div className="container_EmptyList">
      <h2>Você ainda não possui nenhum lançamento</h2>
      <img src={emptyImg} alt="Lista vazia"></img>
    </div>
  );
};

export default EmptyList;
