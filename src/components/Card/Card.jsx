import React, { useState } from "react";
import { FetchApi } from "../fetchApi/FetchApi.js";
import style from "../style/Card.module.css";

const Card = () => {
  const url = "https://thronesapi.com/api/v2/Characters";
  const { data, error, loading } = FetchApi(url);
  const [showChar, setShowChar] = useState(10);

  const handleClickMore = () => {
    setShowChar(showChar + 10);
  };

  const handleReset = () => {
    setShowChar(10);
  };

  return (
    <div className={style.containerGeneral}>
      <h1 className={style.title}>Game of Thrones Character Api</h1>
      <h2 className={style.title}>
        <a
          href="https://thronesapi.com/swagger/index.html?urls.primaryName=Game%20of%20Thrones%20API%20v2"
          target="blanck"
        >
          Swagger API Documentation
        </a>
      </h2>
      <div></div>
      {error && <h2>Error: {error}</h2>}
      {loading && <h2>Loading...</h2>}
      {data?.slice(0, showChar).map((char) => (
        <div className={style.container}>
          <ul key={char.id} className={style.ulContainer}>
            <div className={style.card}>
              <li>{char.id}</li>
              <li>{char.fullName}</li>
              <li>
                <div className={style.containerImg}>
                <img
                  src={char.imageUrl}
                  alt="img from Apin not found"
                  className={style.img}
                />
                </div>
              </li>
            </div>
          </ul>
        </div>
      ))}
      <div className={style.containerBtn}>

      {data && showChar < data.length && (
        <button onClick={handleClickMore} className={style.btn}>Mostrar mas</button>
      )}

      {data && showChar && <button onClick={handleReset} className={style.btn}>Reset</button>}
      </div>
      
    </div>
  );
};

export default Card;
