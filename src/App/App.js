import "./App.css";
import React from 'react';
import { AppRoutes } from "../Routes/router";
import NavigationTab from "../Components/NavigationTab/NavigationTab";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Login from '../Components/Login/Login';
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return ReactDOM.render(
    <BrowserRouter>
      <AppRoutes />
      <NavigationTab />
      <AppRoutes />
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default App;
