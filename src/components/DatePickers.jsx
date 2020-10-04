import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  const [fromDate, setFromDate] = useState("2019-10-01");
  const [toDate, setToDate] = useState("2019-10-01");


  const onSubmit = (event) => {
    console.log(fromDate, toDate);

  }

  return (
    <Container>
      <form className={classes.container} noValidate>
        <Grid container style={{ padding: 30 }}>
          <Grid item xs={4}>
            <TextField
              id="date"
              label="From Date"
              type="date"
              defaultValue={fromDate}
              onChange={e=> setFromDate(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="date"
              label="To Date"
              type="date"
              defaultValue={toDate}
              onChange={e=> setToDate(e.target.value)}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />

          </Grid>
          <Grid item  xs={4}>
            <Button variant="contained" size="large" color="primary" onClick={onSubmit}>
              Submit
            </Button>
          </Grid>

        </Grid>
      </form>
    </Container>

  );
}
