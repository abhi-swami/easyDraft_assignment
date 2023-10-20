import React from "react";
import Button from "@mui/material/Button";
import styles from "./TextItem.module.css";

function TextItem({ userDetails, updateDetails }) {
  // console.log(props.names)
  // console.log(userDetails)
  const { id, name, age } = userDetails;
  console.log(id, name, age);
  return (
    <div className={styles.textItemContainer}>
      <p className={styles.name}>Name: {name}</p>
      <p className={styles.age}>Age: {age}</p>
      <Button
        onClick={() => updateDetails(id)}
        disabled={!(name && age)}
        className={styles.resetButton}
      >
        Reset Details
      </Button>
    </div>
  );
}

export default TextItem;
