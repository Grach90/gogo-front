import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import styles from "./search.module.css";

const Viewer = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // const stylesTextField = {
  //   whence: {
  //     borderRadius: "15px 0px 0px 15px",
  //     backgroundColor: "white",
  //   },
  //   where: {
  //     borderRadius: "0px",
  //     backgroundColor: "white",
  //   },
  //   data: {
  //     borderRadius: "0px",
  //     backgroundColor: "white",
  //   },
  //   button: {
  //     borderRadius: "0px 15px 15px 0px",
  //   },
  // };

  return (
    <Container style={{ width: 750 }}>
      <div className={styles.searchContainer}>
        <div>
          <h1 style={{ textAlign: "center" }}>Ու՞ր եք ցանկանում գնալ ?</h1>
        </div>
        <div>
          <div>
            <TextField
              style={{ width: "-webkit-fill-available", marginBottom: "20px" }}
              InputProps={{ style: { borderRadius: "20px" } }}
              id="outlined-basic"
              label="Որտեղից"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Որտեղ"
              variant="outlined"
              style={{ width: "-webkit-fill-available", marginBottom: "20px" }}
              InputProps={{ style: { borderRadius: "20px" } }}
            />
          </div>
        </div>
        <div className={styles.dataContainer}>
          <div style={{ width: "170px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                // label="For mobile"
                // InputProps={{ style: stylesTextField.where }}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div>
            <FormControl style={{ width: "140px" }}>
              <InputLabel id="demo-simple-select-label">Ուղևորներ</InputLabel>
              <Select
                // style={stylesTextField.data}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="large" style={{ width: "110px" }}>
            Փնտրել
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Viewer;
