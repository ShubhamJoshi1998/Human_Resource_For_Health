import React, { useEffect } from 'react'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// Import any additional Highcharts modules you need (e.g., exporting or drilldown)
// For example, to enable exporting:
import ExportingModule from 'highcharts/modules/exporting';

const Graph4 = () => {

  const ChartComponent = () => {
    useEffect(() => {
      // Create the chart
      Highcharts.chart('chart-container2', {
        chart: {
          type: 'bar', // Change the chart type as needed (e.g., 'line', 'pie', etc.)
        },
        title: {
          text: 'Sample Chart Title',
        },
        xAxis: {
          categories: ['Category 1', 'Category 2', 'Category 3'],
        },
        yAxis: {
          title: {
            text: 'Y-Axis Label',
          },
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Series Name',
            data: [5, 10, 15], // Replace with your own data
          },
        ],
      });
    }, []);

    return (
      <div className="chart-container" id="chart-container2">
        {/* The chart will be rendered here */}
      </div>
    );
  };

  return (
    <div>
      <div className="container-box">
        <div class="container-content">
          {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}

          <div className="chart-container" id="chart-container">
            <ChartComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph4