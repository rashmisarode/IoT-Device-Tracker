import React, { PureComponent } from 'react'
import CustomNavBar from './NavBar';
import DatePickers from './DatePickers';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import SendCommand from './sendCommand';
import GetRealTimeUpdate from './getRealTimeUpdate';


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
            data: []
        }
        this.setData = this.setData.bind(this)
    }

    componentDidMount() {
    }

    setData(webData) {
        let chartArray = [];
        webData.forEach(element => {
            let tempArray = [];
            tempArray.push(element.time);
            tempArray.push(element.cpuTemp);
            chartArray.push(tempArray);
        });
        console.log(`ChartArray: ${chartArray}`)
        this.setState({ data: chartArray })

    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <CustomNavBar />
                <div className={classes.root}>
                    <Grid container spacing={3} style={{ padding: 20 }} justify="center">
                        <Grid item xs={6} style={{ padding: 20 }} >
                            <Paper className={classes.paper}><DatePickers callbackSetData={this.setData} /></Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ padding: 20 }} justify="center">
                        <Grid item xs={12}>
                            <Paper className={classes.paper}><Chart chartData={this.state.data} /></Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ padding: 20 }}>
                        <Grid item xs={6} style={{ padding: 20 }} >
                            <Paper className={classes.paper}>
                                <SendCommand></SendCommand>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} style={{ padding: 20 }} >
                            <Paper className={classes.paper}>
                                <GetRealTimeUpdate></GetRealTimeUpdate>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>

        )
    }
}


export default withStyles(useStyles)(MainView);

