import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

export default function Main() {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("Marin");
  const [lastName, setLastName] = useState("Barbaud");
  const [bio, setBio] = useState("Developer");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [openedFormCount, setOpenedFormCount] = useState(0);

  useEffect(() => {
    if (visible) {
      setOpenedFormCount((prevCount) => prevCount + 1);
    }
  }, [visible]);


  const handleSubmit = (event) => {
    console.log(event);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
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
        <>
          <div>
            <p>Ouverture du formulaire {openedFormCount}</p>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <input name="query" onChange={handleFirstNameChange} />
                <input name="query" onChange={handleLastNameChange} />
                <input name="query" onChange={handleBioChange} />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
