import { useState } from "react";
import ModalWindow from "./components/ModalWindow";

import "./scss/app.scss";

const App = () => {
  const [modal, setModal] = useState(false);
  console.log(modal);

  return (
    <div className="container">
      <button
        onClick={() => {
          setModal(!modal);
        }}
        className="button"
      >
        Хочу сообщить о НЛО!
      </button>
      <ModalWindow
        title="Мы позвоним!"
        description="А может и нет, ведь в этом мире нельзя быть ни в чем уверенным!"
        modal={modal}
        handleModalWindow={setModal}

      />
    </div>
  );
};

export default App;
