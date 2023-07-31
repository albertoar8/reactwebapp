import React from "react";
import "./Book.css";
import DateRangeCalendarValue from "./CalendarPickSubmit";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import dayjs from "dayjs";

export default function Book() {
  const [Dates, setDates] = React.useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);
  const date = new Object(Dates[0].$d).toString()
  console.log(date)
  function updateFirstDate(value) {
    console.log(value);
  }

  function updateLastDate(value) {}
  return (
    <Container
      component="main"
      maxWidth="lg"
      alignItems="center"
      margin="center"
      spacing={{ xs: 2, md: 3, sm: 3 }}
    >
      <Box
        sx={{
          marginTop: 6,
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3, sm: 3 }}>
          <CssBaseline />
          <Grid
            item
            xs={2}
            sm={2}
            md={4}
            lg={4}
            component={Paper}
            elevation={6}
            alignContent={"right"}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Create a Booking
              </Typography>
              <Box component="form" noValidate onSubmit={null} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="initialdate"
                  label="Initial Date"
                  name="initialdate"
                  autoComplete="Initial Date"
                  autoFocus
                  value={date.substring(0,11)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  id="finaldate"
                  label="Final Date"
                  name="finaldate"
                  autoComplete="Final Date"
                />
                <FormControlLabel
                  control={
                    <Checkbox value="Send_confir_email" color="primary" />
                  }
                  label="Send a confirmation email"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid>
            <DateRangeCalendarValue xs={4} sm={4} md={4} />
          </Grid>
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>hello</h2>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
