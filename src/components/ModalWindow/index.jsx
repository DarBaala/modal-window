import React from "react";
import { useForm } from "react-hook-form";

import styles from "./ModalWindow.module.scss";
import searchClose from "../../assets/img/cancel.svg";

const ModalWindow = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(props.handleModalWindow);

  const windowOpenStyled = { opacity: 1, pointerEvents: "auto" };

  return (
    <div className={styles.root} style={props.modal ? windowOpenStyled : {}}>
      <div className={styles.call_me}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            onClick={() => {
              props.handleModalWindow(!props.modal);
            }}
            style={{
              width: "30px",
              position: "absolute",
              right: "20px",
              top: "20px",
              cursor: "pointer",
            }}
            src={searchClose}
            alt=""
          />
          <div className={styles.title}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <p>Телефон</p>
          <input type="text" />
          <p>Имя</p>
          {errors.firstName ? (
            <span style={{ color: "#ff0000", marginBottom: "5px" }}>
              Пожалуйста, введите имя!
            </span>
          ) : (
            ""
          )}
          <input
            {...register("firstName", {
              required: true,
            })}
            type="text"
          />
          <p>Сообщение</p>
          {errors.text ? (
            <span style={{ color: "#ff0000", marginBottom: "5px" }}>
              Пожалуйста, заполните поле сообщения!
            </span>
          ) : (
            ""
          )}
          <textarea {...register("text", { required: true })} type="text" />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
