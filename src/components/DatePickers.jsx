import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Grid } from '@material-ui/core';
import { dataService } from '../services/dataService';

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

export default function DatePickers({callbackSetData}) {
  const classes = useStyles();

  const [fromDate, setFromDate] = useState("2020-10-01");
  const [toDate, setToDate] = useState("2020-10-04");


  const onSubmit = (event) => {
    dataService.getdbData(Date.parse(fromDate), Date.parse(toDate)).then(res=> {
      console.log(res);
      callbackSetData(res);
    }).catch(err=> {
      console.log(err);
      callbackSetData([]);
    })

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
