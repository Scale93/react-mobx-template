import React from 'react';
import ReactEcharts from 'echarts-for-react';

import './style.less';

var myColor = [
  '#bda29a',
  '#c23531',
  '#2f4554',
  '#61a0a8',
  '#d48265',
  '#91c7ae',
  '#749f83',
  '#ca8622',
];

class LineMeter extends React.Component {
  chart = null;

  option = {
    backgroundColor: '#fff',
    grid: {
      top: '0%',
      right: '0%',
      bottom: '0%',
      left: '5%',
      containLabel: true,
    },
    xAxis: [
      {
        show: false,
      },
    ],
    yAxis: [
      {
        axisTick: 'none',
        axisLine: 'none',
        offset: '10',
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          },
        },
        data: ['8', '7', '6', '5', '4', '3', '2', '1'],
      },
      {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '16',
          },
        },
        data: ['12567', '12566', '12566', '12566', '12566', '12566', '12566', '12566'],
      },
      {
        name: 'aaaaaaa',
        nameGap: '50',
        nameTextStyle: {
          color: '#ffffff',
          fontSize: '16',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0)',
          },
        },
        data: [],
      },
    ],
    series: [
      {
        name: 'Risk',
        type: 'bar',
        yAxisIndex: 0,
        data: [52, 60, 22, 33, 44, 78, 59, 15],
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: function(param) {
              return param.value + '%';
            },
            textStyle: {
              color: 'black',
              fontSize: '16',
            },
          },
        },
        barWidth: 16,
        itemStyle: {
          normal: {
            color: function(params) {
              const num = myColor.length;
              return myColor[params.dataIndex % num];
            },
          },
        },
        z: 2,
      },
      {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 20,
        itemStyle: {
          normal: {
            color: '#fff',
            barBorderRadius: 5,
          },
        },
        z: 1,
      },
      {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: [100, 100, 100, 100, 100, 100, 100, 100],
        barWidth: 24,
        itemStyle: {
          normal: {
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            },
            barBorderRadius: 5,
          },
        },
        z: 0,
      },
      {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0, 0, 0, 0, 0, 0, 0, 0],
        yAxisIndex: 2,
        symbolSize: 35,
        itemStyle: {
          normal: {
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            },
            opacity: 1,
          },
        },
        z: 2,
      },
    ],
  };

  render() {
    return (
      <div className="RiskMeter">
        <ReactEcharts
          className="RiskMeter--chart"
          ref={(el) => (this.chart = el)}
          style={{ height: 400 }}
          option={this.option}
        />
      </div>
    );
  }
}

export default LineMeter;
