import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

export default function NavigationTab() {
  const navigate = useNavigate("/home");
  const [value, setValue] = React.useState("/home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    navigate("/"+newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="home" label="Home" />
        <Tab value="about" label="About" />
        <Tab value="login" label="Login" />
        <Tab value="search" label="Search" />
        <Tab value="book" label="Book" />
      </Tabs>
    </Box>
  );
}