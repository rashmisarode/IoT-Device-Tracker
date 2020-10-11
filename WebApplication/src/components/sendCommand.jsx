import React, { PureComponent } from 'react'
import { Button } from '@material-ui/core';
import { dataService } from '../services/dataService';

class SendCommand extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {


        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit = (event) => {
        dataService.sendCommandToIot().then(res=> {
           console.log(res);
         }).catch(err=> {
           console.log(err);
         }) 
     
       }
 

    render() {
        return (
            <div style={{ padding: 40 }}>
            <div style={{ fontSize: 20, fontWeight: "bold"  }}> Send Test Command to IoT Device:</div>
                <br></br>
                <Button variant="contained" size="large" color="primary" onClick={this.onSubmit} style={{ marginTop: 20 }}>
                    Send Command
                </Button>
            </div>

        )
    }
}

export default SendCommand