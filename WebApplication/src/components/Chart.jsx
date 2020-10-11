import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'




function Chart({chartData}) {
    console.log("Chart:",chartData);
    const options = {
        title: {
          text: 'CPU Temperature Sensor Chart'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'CPU Temperature'
            }
        },
        series: [{
          data: chartData
        }]
      }
    return (
      <div>
        {/* <div style={{ fontSize: 20, fontWeight: "bold"  }}>Historical Data Chart</div> */}
        <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
      </div>
        
    )
}

export default Chart
