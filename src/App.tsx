import React from "react";
import Navbar from "./components/Navbar/navbar-container";
import Login from "./components/login/login-container";
import Register from "./components/Register/register-container";
import Search from "./components/Search/search-cotainer";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Login />
        <Register />
        <Search />
      </Container>
    </div>
  );
}

export default App;
