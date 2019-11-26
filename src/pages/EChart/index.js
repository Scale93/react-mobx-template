import React from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import ReportCard from 'src/components/ReportCard';
import { Divider, Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';

const option1 = {
  title: {
    text: 'Wheater Statistics',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['City Alpha', 'City Beta', 'City Gamma'],
  },
  grid: {
    left: 100,
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'value',
    name: 'Days',
    axisLabel: {
      formatter: '{value}',
    },
  },
  yAxis: {
    type: 'category',
    inverse: true,
    data: ['Sunny', 'Cloudy', 'Showers'],
    axisLabel: {
      formatter: function(value) {
        return '{' + value + '| }\n{value|' + value + '}';
      },
      margin: 20,
      rich: {
        value: {
          lineHeight: 30,
          align: 'center',
        },
        Sunny: {
          height: 40,
          align: 'center',
          backgroundColor: 'yellow',
        },
        Cloudy: {
          height: 40,
          align: 'center',
          backgroundColor: 'grey',
        },
        Showers: {
          height: 40,
          align: 'center',
          backgroundColor: 'black',
        },
      },
    },
  },
  series: [
    {
      name: 'City Alpha',
      type: 'bar',
      data: [165, 170, 30],
      label: {
        normal: {
          show: true,
          textBorderColor: '#333',
          textBorderWidth: 2,
        },
      },
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
        label: {
          normal: {
            formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
            backgroundColor: 'rgb(242,242,242)',
            borderColor: '#aaa',
            borderWidth: 1,
            borderRadius: 4,
            padding: [4, 10],
            lineHeight: 26,
            position: 'right',
            distance: 20,
            rich: {
              a: {
                align: 'center',
                color: '#fff',
                fontSize: 18,
                textShadowBlur: 2,
                textShadowColor: '#000',
                textShadowOffsetX: 0,
                textShadowOffsetY: 1,
                textBorderColor: '#333',
                textBorderWidth: 2,
              },
              b: {
                color: '#333',
              },
              c: {
                color: '#ff8811',
                textBorderColor: '#000',
                textBorderWidth: 1,
                fontSize: 22,
              },
            },
          },
        },
        data: [{ type: 'max', name: 'max days: ' }, { type: 'min', name: 'min days: ' }],
      },
    },
    {
      name: 'City Beta',
      type: 'bar',
      label: {
        normal: {
          show: true,
          textBorderColor: '#333',
          textBorderWidth: 2,
        },
      },
      data: [150, 105, 110],
    },
    {
      name: 'City Gamma',
      type: 'bar',
      label: {
        normal: {
          show: true,
          textBorderColor: '#333',
          textBorderWidth: 2,
        },
      },
      data: [220, 82, 63],
    },
  ],
};

const option2 = {
  title: {
    text: 'ReactEChart',
    subtext: 'Example',
    top: 10,
    left: 10,
  },
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,250,0.2)',
  },
  legend: {
    type: 'scroll',
    bottom: 10,
    data: (function() {
      var list = [];
      for (var i = 1; i <= 28; i++) {
        list.push(i + 2000 + '');
      }
      return list;
    })(),
  },
  visualMap: {
    top: 'middle',
    right: 10,
    color: ['red', 'yellow'],
    calculable: true,
  },
  radar: {
    indicator: [
      { text: 'IE8-', max: 400 },
      { text: 'IE9+', max: 400 },
      { text: 'Safari', max: 400 },
      { text: 'Firefox', max: 400 },
      { text: 'Chrome', max: 400 },
    ],
  },
  series: (function() {
    var series = [];
    for (var i = 1; i <= 28; i++) {
      series.push({
        name: '浏览器（数据纯属虚构）',
        type: 'radar',
        symbol: 'none',
        lineStyle: {
          width: 1,
        },
        emphasis: {
          areaStyle: {
            color: 'rgba(0,250,0,0.3)',
          },
        },
        data: [
          {
            value: [(40 - i) * 10, (38 - i) * 4 + 60, i * 5 + 10, i * 9, (i * i) / 2],
            name: i + 2000 + '',
          },
        ],
      });
    }
    return series;
  })(),
};

const option3 = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    data: [
      'Data1',
      'Data2',
      'Data3',
      'Data4',
      'Data5',
      'Data6',
      'Data7',
      'Data8',
      'Data9',
      'Data10',
    ],
  },
  series: [
    {
      name: 'Data1',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position: 'inner',
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        { value: 335, name: '直达', selected: true },
        { value: 679, name: '营销广告' },
        { value: 1548, name: '搜索引擎' },
      ],
    },
    {
      name: 'Data2',
      type: 'pie',
      radius: ['40%', '55%'],
      label: {
        normal: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#eee',
          borderColor: '#aaa',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#999',
              lineHeight: 22,
              align: 'center',
            },
            hr: {
              borderColor: '#aaa',
              width: '100%',
              borderWidth: 0.5,
              height: 0,
            },
            b: {
              fontSize: 16,
              lineHeight: 33,
            },
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 2,
            },
          },
        },
      },
      data: [
        { value: 335, name: 'Data1' },
        { value: 310, name: 'Data2' },
        { value: 234, name: 'Data3' },
        { value: 135, name: 'Data4' },
        { value: 1048, name: 'Data5' },
        { value: 251, name: 'Data6' },
        { value: 147, name: 'Data7' },
        { value: 102, name: 'Data8' },
      ],
    },
  ],
};

class EChart extends React.Component {
  render() {
    return (
      <div className="echart-example" style={{ height: '100vh' }}>
        <Breadcrumb />
        <Divider orientation="center" style={{ margin: '0 0 16px 0' }} />
        <Row height="100%" align="middle" justify="center">
          <Col span={12}>
            <ReportCard>
              <ReactEcharts option={option3} />
            </ReportCard>
          </Col>
          <Col span={12}>
            <ReportCard>
              <ReactEcharts option={option2} />
            </ReportCard>
          </Col>
          <Col span={24}>
            <ReportCard>
              <ReactEcharts option={option1} />
            </ReportCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EChart;
