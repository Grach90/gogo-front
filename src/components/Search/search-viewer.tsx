import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";

const Viewer = () => {
  return (
    <Container style={{ maxWidth: 992, height: 60 }}>
      <div>
        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
    </Container>
  );
};

export default Viewer;
