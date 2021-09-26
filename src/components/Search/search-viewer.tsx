import * as React from "react";
import { Container, InputProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import styles from "./search.module.css";
import { stringify } from "querystring";

const Viewer = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const stylesTextField = {
    whence: {
      borderRadius: "15px 0px 0px 15px",
      backgroundColor: "white"
    },
    where: {
      borderRadius: "0px",
      backgroundColor: "white"
    },
    data: {
      borderRadius: "0px",
      backgroundColor: "white"
    },
    button: {
      borderRadius: "0px 15px 15px 0px"
    }
  }

  return (
    <div className={styles.searchContainer}>
      <div style={{ display: "flex" }}>
        <div>
          <TextField
            InputProps={{ style: stylesTextField.whence }}
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
            InputProps={ { style: stylesTextField.where } }
          />
        </div>
        <div style={{ width: "170px" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              // label="For mobile"
              InputProps={ { style: stylesTextField.where } }
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
              style={stylesTextField.data}
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
        <Button
          variant="contained"
          size="large"
          style={stylesTextField.button }
        >
          Փնտրել
        </Button>
      </div>
    </div>
  );
};

export default Viewer;
