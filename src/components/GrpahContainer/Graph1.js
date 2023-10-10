import React, { useEffect } from 'react'
import Highcharts from 'highcharts';

const Graph1 = () => {

  const ChartComponent = () => {
    useEffect(() => {
      // Create the chart
      Highcharts.chart('chart-container', {
        chart: {
          type: 'column', // Change the chart type as needed (e.g., 'line', 'pie', etc.)
        },
        title: {
          text: 'Sample Chart Title',
        },
        xAxis: {
          categories: ['Category 1', 'Category 2', 'Category 3'],
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
      <div className="chart-container" id="chart-container">
        {/* The chart will be rendered here */}
      </div>
    );
  };
  return (
    <div>
      <div className="container-box">
        <div class="styled-select">
          <select id="selectOption">
            <option value="" disabled selected>Global and National comparisone</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="container-box">
        <div class="container-content">
          <div className="chart-container" id="chart-container">
            <ChartComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph1