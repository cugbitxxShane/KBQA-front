var echarts = require('echarts')

function echarts1 () {
  // 基于准备好的dom，初始化echarts实例
  // 第一步，init方法
  var myChart = echarts.init(document.getElementById('echarts_1'))

  var data = [
    { value: 10000, name: '信号分选样本' },
    { value: 27000, name: '雷达状态识别样本集1' },
    { value: 73187, name: '雷达状态识别样本集2' }
  ]
  // 设置option
  var option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: <br/>{c} ({d}%)'
    },
    color: ['#0089ff', '#e05016', '#16e092', '#af89d6', '#4ac7f5'],
    legend: { // 图例组件，颜色和名字
      x: '50%',
      y: '40%',
      orient: 'vertical',
      itemGap: 12, // 图例每项之间的间隔
      itemWidth: 10,
      itemHeight: 10,
      icon: 'rect',
      data: ['信号分选样本', '雷达状态识别样本集1', '雷达状态识别样本集2'],
      textStyle: {
        color: [],
        fontStyle: 'normal',
        fontFamily: '微软雅黑',
        fontSize: 16
      }
    },
    series: [{
      name: '行业占比',
      type: 'pie',
      clockwise: false, // 饼图的扇区是否是顺时针排布
      minAngle: 20, // 最小的扇区角度（0 ~ 360）
      center: ['25%', '50%'], // 饼图的中心（圆心）坐标
      radius: [50, 90], // 饼图的半径
      avoidLabelOverlap: true, /// /是否启用防止标签重叠
      itemStyle: { // 图形样式
        normal: {
          borderColor: '#1e2239',
          borderWidth: 2
        }
      },
      label: { // 标签的位置
        normal: {
          show: true,
          position: 'inside', // 标签的位置
          formatter: '{d}%',
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          show: true,
          textStyle: {
            fontWeight: 'bold'
          }
        }
      },
      data: data
    }, {
      name: '',
      type: 'pie',
      clockwise: false,
      silent: true,
      minAngle: 20, // 最小的扇区角度（0 ~ 360）
      center: ['25%', '50%'], // 饼图的中心（圆心）坐标
      radius: [0, 40], // 饼图的半径
      itemStyle: { // 图形样式
        normal: {
          borderColor: '#1e2239',
          borderWidth: 1.5,
          opacity: 0.21
        }
      },
      label: { // 标签的位置
        normal: {
          show: false
        }
      },
      data: data
    }]
  }

  // 使用刚指定的配置项和数据显示图表。
  // setOption
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

function echarts4 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts_4'))

  var option = {

    tooltip: {
      trigger: 'item',
      formatter: '{b}: <br/>  {c} ({d}%)'
    },

    toolbox: {
      show: false,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    series: [

      {
        name: '排名',
        type: 'pie',
        color: ['#af89d6', '#f5c847', '#ff999a', '#0089ff', '#25f3e6'],
        radius: [20, 100],
        center: ['50%', '45%'],
        roseType: 'area',
        data: [
          { value: 10000, name: '信号分选' },
          { value: 9000, name: '火控雷达状态识别' },
          { value: 9000, name: '警戒雷达状态识别' },
          { value: 9000, name: '多功能雷达状态识别' },
          { value: 10369, name: 'l工作模式状态识别' },
          { value: 10388, name: 'p1工作模式状态识别' },
          { value: 10433, name: 'p2工作模式状态识别' },
          { value: 10511, name: 's工作模式状态识别' },
          { value: 10517, name: 'x1工作模式状态识别' },
          { value: 10480, name: 'x2工作模式状态识别' },
          { value: 10489, name: 'x3工作模式状态识别' }
        ]
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

function echarts5 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts_5'))

  var xData = (function () {
    var data = ['雷达集一', '雷达集二', '雷达集三', '雷达集四']

    return data
  }())

  var data = [13, 7, 8, 1]

  var option = {
    // backgroundColor: "#141f56",

    tooltip: {
      show: 'true',
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.2)', // 背景
      // padding: [8, 10], // 内边距
      padding: [1, 1], // 内边距
      textStyle: {
        color: 'rgba(249,249,249,1)'
      },
      // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', // 添加阴影
      formatter: function (params) {
        if (params.seriesName !== '') {
          return params.name + ' ：  ' + params.value + ' 个目标'
        }
      }

    },
    grid: {
      borderWidth: 0,
      top: 20,
      bottom: 35,
      left: 40, // 55
      right: 20,
      textStyle: {
        color: '#fff'
      }
    },
    xAxis: [{
      type: 'category',

      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#363e83'
        }
      },
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#bac0c0',
          fontWeight: 'normal',
          fontSize: '12'
        }
        // formatter:function(val){
        //     return val.split("").join("\n")
        // },
      },
      data: xData
    }, {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: xData
    }],
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#32346c'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#32346c '
        }
      },
      axisLabel: {
        textStyle: {
          color: '#bac0c0',
          fontWeight: 'normal',
          fontSize: '12'
        },
        formatter: '{value}'
      }
    },
    series: [
      {
      // name: '生师比(%)',
        type: 'bar',
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#08f17c'
            }, {
              offset: 1,
              color: '#84f108'
            }]),
            barBorderRadius: 50,
            borderWidth: 0
          },
          // color: ['#e7d809', '#4af108', '#0880f1', '#f10890']
          emphasis: {
            shadowBlur: 15,
            shadowColor: 'rgba(105,123, 214, 0.7)'
          }
        },
        zlevel: 2,
        barWidth: '20%',
        data: data
      },
      {
        name: '',
        type: 'bar',
        xAxisIndex: 1,
        zlevel: 1,
        itemStyle: {
          normal: {
            color: '#121847',
            borderWidth: 0,
            shadowBlur: {
              shadowColor: 'rgba(255,255,255,0.31)',
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 2
            }
          }
        },
        barWidth: '20%',
        data: [12, 12, 12, 12]// 修改y轴最大显示值
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

function echarts6 () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts_6'))

  var data = {
    chart: [{
      month: '分选',
      value: 24615

    },

    // {
    //   month: '欺骗干扰',
    //   value: 500

    // },

    {
      month: '状态',
      value: 15242

    },

    // {
    //   month: 'NO.4',
    //   value: 442

    // },

    {
      month: '行为',
      value: 24545

    }

    ]
  }

  var xAxisMonth = []
  var barData = []
  var lineData = []
  for (var i = 0; i < data.chart.length; i++) {
    xAxisMonth.push(data.chart[i].month)
    barData.push({
      name: xAxisMonth[i],
      value: data.chart[i].value
    })
    lineData.push({
      name: xAxisMonth[i],
      value: data.chart[i].ratio
    })
  }

  var option = {
    // backgroundColor: "#020d22",
    title: '',
    grid: {
      top: '10%',
      left: '13%',
      bottom: '3%',
      right: '5%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return params[0].data.name + '<br/>' + '样本条数: ' + params[1].data.value + '条'
      }
    },
    xAxis: [{
      type: 'category',
      show: false,
      data: ['分选', '状态', '行为'],
      axisLabel: {
        textStyle: {
          color: '#b6b5ab'
        }
      }
    },
    {
      type: 'category',
      position: 'bottom',
      data: xAxisMonth,
      boundaryGap: true,
      // offset: 40,
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        color: 'rgba(255,255,255,0.2)'
      },
      axisLabel: {
        textStyle: {
          color: '#b6b5ab'
        }
      }
    }

    ],
    yAxis: [{
      show: true,
      offset: 52,
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        color: 'rgba(255,255,255,0.2)'
      },
      axisLabel: {
        show: true,
        color: '#b6b5ab'
      }
    }, {
      show: false,
      type: 'value',
      // name: "合格率(%)",
      nameTextStyle: {
        color: '#ccc'
      },
      axisLabel: {
        color: '#ccc'
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true
      },
      axisTick: {
        show: true
      }
    }],
    color: ['#e54035'],
    series: [{
      name: '训练人次',
      type: 'pictorialBar',
      xAxisIndex: 1,
      barCategoryGap: '-80%',
      // barCategoryGap: '-5%',
      symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = [
              'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
              'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
              'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
            ]
            return colorList[params.dataIndex]
          }
        },
        emphasis: {
          opacity: 1
        }
      },
      data: barData
    },
    {
      symbol: 'image://data:image/png;base64,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',
      symbolSize: 42,
      name: '完成率',
      type: 'line',
      yAxisIndex: 1,
      data: lineData,
      itemStyle: {
        normal: {
          borderWidth: 5,
          color: {
            colorStops: [{
              offset: 0,
              color: '#821eff'
            },

            {
              offset: 1,
              color: '#204fff'
            }
            ]
          }
        }
      }
    }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

export {
  echarts1,
  echarts4,
  echarts5,
  echarts6
}
