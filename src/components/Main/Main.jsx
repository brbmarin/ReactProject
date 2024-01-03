import React, { useEffect, useState } from "react";

import styles from "./Main.module.css";

export default function Main() {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("Marin");
  const [lastName, setLastName] = useState("Barbaud");
  const [bio, setBio] = useState("Developer");
  const [openedFormCount, setOpenedFormCount] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "Marin",
    lastName: "Barbaud",
    bio: "Developer",
  });

  useEffect(() => {
    if (visible) {
      setOpenedFormCount((prevCount) => prevCount + 1);
    }
  }, [visible]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setBio(formData.bio);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <p>Profile</p>
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
        Form
      </button>
      {visible && (
        <>
          <div>
            <p>Ouverture du formulaire {openedFormCount}</p>
            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <input name="firstName" onChange={handleInputChange} />
                <input name="lastName" onChange={handleInputChange} />
                <input name="bio" onChange={handleInputChange} />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
