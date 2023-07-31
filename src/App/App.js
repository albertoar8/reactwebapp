import "./App.css";
import React from "react";
import { AppRoutes } from "../Routes/router";
import NavigationTab from "../Components/NavigationTab/NavigationTab";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//import Login from '../Components/Login/Login';
//import useToken from './useToken';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavigationTab />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById("root")
  );
}

export default App;
