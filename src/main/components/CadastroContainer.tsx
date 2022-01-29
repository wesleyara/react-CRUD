/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../components-style/CadastroContainer.module.scss";

export function CadastroContainer() {
  const [title, setTitle] = useState("");
  const [descricao, setDescricao] = useState("");

  interface Propss {
    title: string;
    descricao: string;
  }

  const setNewItem = localStorage.getItem("setItem");
  const lock: Propss[] = [];

  function handleClick() {
    if (title === "" || descricao === "") {
      console.log("Informações faltando");
    } else {
      const setLock = {
        title,
        descricao,
      };
      if (setNewItem) {
        const newItem = JSON.parse(setNewItem);
        lock.push(setLock);
        const concatenado = lock.concat(newItem);
        localStorage.setItem("setItem", JSON.stringify(concatenado));
      } else {
        lock.push(setLock);
        localStorage.setItem("setItem", JSON.stringify(lock));
      }
    }
  }

  return (
    <div className={style.bxCadastro}>
      <p>Titulo:</p>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={style.searchInput}
        type="text"
        name="nome"
        id="title"
      />
      <p>Descrição:</p>
      <input
        className={style.searchInput}
        onChange={(e) => setDescricao(e.target.value)}
        value={descricao}
        type="text"
        name="descricao"
        id="descricao"
      />
      <br />
      <Link to="/">
        <button onClick={handleClick} id="btn">
          Salvar
        </button>
      </Link>
    </div>
  );
}
