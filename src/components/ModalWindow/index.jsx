import React from "react";
import styles from "./ModalWindow.module.scss";

const ModalWindow = () => {
  return (
    <div className={styles.root}>
      <div className={styles.call_me}>
        <form action="">
          <h3>Мы позвоним!</h3>
          <p>
            А может и нет, ведь в этом мире нельзя быть ни в чем уверенным!
          </p>
          <p>Телефон</p>
          <input type="text" />
          <p>Имя</p>
          <input type="text" />
          <p>Сообщение</p>
          <input type="text" />
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
