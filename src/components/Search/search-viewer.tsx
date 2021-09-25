import * as React from 'react';
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import {isWeekend} from 'date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const Viewer = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };


  return (
    <Container style={{ maxWidth: 992, height: 60 }}>
      <div style={{display:'flex'}}>
        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div style={{display:'flex'}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
            // label="For mobile"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl >
          <InputLabel id="demo-simple-select-label">Ուղևորներ</InputLabel>
            <Select
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
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Container>
  );
};

export default Viewer;
