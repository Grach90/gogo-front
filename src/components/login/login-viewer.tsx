import React from "react";
import styles from "./login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Viewer: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <TextField
        id="standard-basic"
        label="էլ․ փոստ"
        variant="outlined"
        style={{ marginBottom: "35px" }}
      />
      <TextField
        type="password"
        id="standard-basic"
        label="Գաղտնաբառ"
        variant="outlined"
        style={{ marginBottom: "70px" }}
      />
      <Button variant="contained" size="large">
        Մուտք
      </Button>
    </div>
  );
};

export default Viewer;
