import React, { PureComponent } from 'react'
import CustomNavBar from './NavBar';
import DatePickers from './DatePickers';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
class MainView extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <CustomNavBar />
                <div className={classes.root}>
                    <Grid container spacing={3} style={{ padding: 20 }} justify="center">
                        <Grid item xs={6} style={{ padding: 20 }} >
                            <Paper className={classes.paper}><DatePickers /></Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ padding: 20 }} justify="center">
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>xs=12</Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>

        )
    }
}


export default withStyles(useStyles)(MainView);

