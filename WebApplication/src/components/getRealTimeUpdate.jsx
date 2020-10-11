import React, { PureComponent } from 'react'
import { dataService } from '../services/dataService';

class GetRealTimeUpdate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            realTimeData: {}
        }
        this.getRealUpdate = this.getRealUpdate.bind(this)
    }
    componentDidMount(){
        this.getRealUpdate(this);
       // setInterval(this.getRealUpdate, 5000);
       
    }
     getRealUpdate(){
        let fromDate = (new Date()).toLocaleString();
        let toDate = (new Date()).toLocaleString();
        console.log(Date.parse(fromDate))
        dataService.getdbData(Date.parse(fromDate)-5000, Date.parse(toDate)).then(res=> {
            console.log(res[0]);
            let date  = new Date(res[0].created).toLocaleString()
            let result = {
                "cpuTemp": res[0].cpuTemp,
                "date" : date
            }

            this.setState({
                realTimeData : result
            })
          }).catch(err=> {
            console.log(err);
          })
    }
    render() {
        const { realTimeData } = this.state;
        return (
             <div style={{ padding: 40 }}>
                 <div style={{ fontSize: 20, fontWeight: "bold"  }}>Real Time Update from IoT</div>
                 {
                    realTimeData && <div style={{ marginTop: 25 }}>
                        <div>
                        Date : {this.state.realTimeData.date}
                        </div>
                        <div style={{ marginTop: 20 }}>
                        CPU Temperature : {this.state.realTimeData.cpuTemp}
                        </div>
                    </div>                 
                 }
                              
             </div>
        )
    }
}

export default GetRealTimeUpdate