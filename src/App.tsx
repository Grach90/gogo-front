import React from "react";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar/navbar-container";
import Login from "./components/login/login-container";
import Register from "./components/Register/register-container";
import Search from "./components/Search/search-cotainer";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route 
        path="/"
        component={Search}
        exact
      />
      <Container>
        <Route
          path='/login'
          component={Login}
          exact
        />
        <Route
          path='/register'
          component={Register}
          exact
        />
      </Container>
    </div>
  );
}

export default App;
