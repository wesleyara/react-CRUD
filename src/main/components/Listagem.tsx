/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import style from "../components-style/Listagem.module.scss";

export default function Listagem() {
  const API_URL: any = import.meta.env.VITE_API_URL;

  interface Props {
    id: number;
    name: string;
    image_url: string;
    description: string;
    API_URL: string;
  }

  interface Propss {
    title: string;
    descricao: string;
  }

  const [item, setItem] = useState<Props[]>([]);
  const [newr, setNewr] = useState<Propss[]>([]);

  useEffect(() => {
    const loc = localStorage.getItem("setid");

    async function list() {
      await fetch(API_URL);
      const response = await fetch(API_URL);
      const data = await response.json();
      setItem(data);
      localStorage.setItem("setid", JSON.stringify(data));
    }

    if (loc) {
      const locjson = JSON.parse(loc);
      setItem(locjson);
    } else {
      list();
    }

    const setNewItem = localStorage.getItem("setItem");

    if (setNewItem) {
      const newItem = JSON.parse(setNewItem);
      setNewr(newItem);
    }
  }, [API_URL]);

  function apagarItem(idProduto: number) {
    const filteredItem = item.filter((item) => item.id !== idProduto);
    setItem(filteredItem);
    localStorage.setItem("setid", JSON.stringify(filteredItem));
  }

  function apagarItemNew(idProduto: string) {
    const filteredItemNew = newr.filter((newr) => newr.title !== idProduto);
    setNewr(filteredItemNew);
    localStorage.setItem("setItem", JSON.stringify(filteredItemNew));
  }

  return (
    <div className={style.bxListagem}>
      <div className={style.bxSearch}>
        <input
          className={style.searchInput}
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar"
        />
        <div className={style.searchBtn}></div>
      </div>
      <div className={style.listContainer}>
        {item.map((val) => {
          return (
            <div className={style.cardItem} key={val.id}>
              <div
                onClick={() => apagarItem(val.id)}
                key={val.id}
                className={style.delBtn}
              >
                x
              </div>
              <div className={style.imgContainer}>
                <img src={val.image_url} alt="" />
              </div>
              <div className={style.descContainer}>
                <h3>{val.name}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          );
        })}
        {newr &&
          newr.map((val) => {
            return (
              <div className={style.cardItem} key={val.title}>
                <div
                  onClick={() => apagarItemNew(val.title)}
                  key={val.title}
                  className={style.delBtn}
                >
                  x
                </div>
                <div className={style.imgContainer}>
                  <img
                    src="https://via.placeholder.com/150?text=Bebida"
                    alt="Image"
                  />
                </div>
                <div className={style.descContainer}>
                  <h3>{val.title}</h3>
                  <p>{val.descricao}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
