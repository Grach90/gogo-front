import React from "react";
import styles from "./register.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Viewer = () => {
  return (
    <div className={styles.registerContainer}>
      <TextField
        id="standard-basic"
        label="Անուն"
        variant="outlined"
        style={{ marginBottom: "35px" }}
      />
      <TextField
        id="standard-basic"
        label="Ազգանուն"
        variant="outlined"
        style={{ marginBottom: "35px" }}
      />
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
        style={{ marginBottom: "35px" }}
      />
      <TextField
        type="password"
        id="standard-basic"
        label="Կրկնել Գաղտնաբառը"
        variant="outlined"
        style={{ marginBottom: "70px" }}
      />
      <Button variant="contained" size="large">
        Գրանցվել
      </Button>
    </div>
  );
};

export default Viewer;
