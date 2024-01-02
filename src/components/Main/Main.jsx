import React, { useState } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const [visible, setVisible] = useState(true);

  const [firstName, setFirstName] = useState("Marin");
  const [lastName, setLastName] = useState("Barbaud");
  const [bio, setBio] = useState("Developer");

  const handleSubmit = (formData) => {
    const query = formData.get("query");
    console.log(`${query}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <ul>
          {firstName} <br />
          {lastName} <br />
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
          <form onSubmit={handleSubmit}>
            <input name="query" />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
