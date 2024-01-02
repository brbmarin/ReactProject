import React, { useState } from "react";
import styles from "./Main.module.css";

export default function Main({ name, age, job, bio }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <ul>
          {name} <br />
          {age} <br />
          {job} <br />
          {bio}
        </ul>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Click
      </button>
      {visible && (
        <div className={styles.form}>
          <form action="">
            <input name="query" />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
