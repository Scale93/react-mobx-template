import Echarts from 'echarts';

const pieChartColor = ['#3FA7DC', '#7091C4', '#5170A2', '#3398db'];
const primaryChartColor = [
  '#d4ebf7',
  '#bee2f3',
  '#a9d8ef',
  '#93ceeb',
  '#7ec4e7',
  '#68bae3',
  '#53b0df',
  '#3fa7dc',
  '#289dd7',
  '#248dc2',
];
const barChartColor = ['#3398DB'];
const graphSecondaryColor = '#334544';

const BAR_CHART = {
  color: barChartColor,
  title: {
    text: '',
  },
  tooltip: {},
  xAxis: {
    axisLabel: {
      rotate: -45,
    },
    data: [],
  },
  yAxis: {},
  series: [
    {
      name: 'Breach count',
      type: 'bar',
      data: [],
    },
  ],
};

const TIMELINE_CHART = {
  color: [barChartColor],
  title: {
    text: 'Breaches count timeline',
  },
  xAxis: {
    type: 'category',
    data: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [123, 654, 984, 354, 321, 123, 45],
      type: 'line',
      smooth: true,
    },
  ],
};

const PIE_CHART = {
  color: pieChartColor,
  title: {
    text: 'Categories',
    left: 'left',
    top: 20,
    textStyle: {
      color: '#000',
    },
  },

  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },

  visualMap: {
    show: false,
    min: 0,
    max: 100,
    inRange: {
      colorLightness: [0, 0.6],
    },
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    data: [],
    selected: [],
  },
  labelLine: {
    normal: {
      lineStyle: {
        color: 'rgba(0, 0, 0, 0.5)',
      },
      smooth: 0.2,
      length: 10,
      length2: 20,
    },
  },
  label: {
    normal: {
      show: false,
      position: 'center',
    },
    emphasis: {
      show: true,
      textStyle: {
        fontSize: '30',
        fontWeight: 'bold',
      },
    },
  },
  series: [
    {
      name: 'categories',
      type: 'pie',
      data: [],
      label: {
        normal: {
          textStyle: {
            color: 'rgba(0, 0, 0, 0.8)',
          },
        },
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.5)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function(idx) {
        return Math.random() * 200;
      },
    },
  ],
};

const STACKED_AREA_CHART = {
  tooltip: {
    trigger: 'axis',
    position: function(pt) {
      return [pt[0], '10%'];
    },
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
        title: 'Zoom',
      },
      restore: {
        title: 'Refresh',
      },
      saveAsImage: {
        title: 'Save',
      },
    },
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10,
    },
    {
      start: 0,
      end: 10,
      handleIcon:
        'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2,
      },
    },
  ],
  title: {
    text: 'Matches per Trend Temporale',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '10%'],
  },
  color: primaryChartColor,
  series: [
    {
      name: 'db',
      type: 'line',
      areaStyle: {},
      data: [],
    },
    {
      name: 'emaiol',
      type: 'line',
      areaStyle: {},
      data: [],
    },
    {
      name: 'b64',
      type: 'line',
      areaStyle: {},
      data: [],
    },
    {
      name: 'api',
      type: 'line',
      areaStyle: { normal: {} },
      data: [],
    },
    {
      name: 'powershell',
      type: 'line',
      label: {
        normal: {
          show: true,
          position: 'top',
        },
      },
      areaStyle: { normal: {} },
      data: [],
    },
  ],
};

const AREA_CHART = {
  tooltip: {
    trigger: 'axis',
    position: function(pt) {
      return [pt[0], '10%'];
    },
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
        title: 'Zoom',
      },
      restore: {
        title: 'Refresh',
      },
      saveAsImage: {
        title: 'Save',
      },
    },
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10,
    },
    {
      start: 0,
      end: 10,
      handleIcon:
        'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2,
      },
    },
  ],
  title: {
    text: 'Matches per Trend Temporale',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '10%'],
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      itemStyle: {
        color: barChartColor,
      },
      areaStyle: {
        color: new Echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: barChartColor,
          },
          {
            offset: 1,
            color: graphSecondaryColor,
          },
        ]),
      },
    },
  ],
};

export { BAR_CHART, TIMELINE_CHART, PIE_CHART, STACKED_AREA_CHART, AREA_CHART };
