<template>
  <div class="data">
    <div class="data-title">
      <div class="title-left fl"></div>
      <div @click.prevent="toHomePage()" class="title-center fl"></div>
      <div class="title-right fr"></div>
    </div>
    <div class="data-content">
      <!-- 左侧区域 -->
      <div class="con-left fl">
        <div class="left-top">
          <div class="info">
            <div class="info-title">动态知识库概览</div>
            <img src="../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
            <img src="../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
            <img src="../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
            <img src="../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
            <div class="info-main">
              <div class="info-1">
                <div class="info-img fl">
                  <img src="../../assets/dataShowImg/icon2.png" alt="" />
                </div>
                <div class="info-text fl">
                  <p>样本库</p>
                  <p>101187</p>
                </div>
              </div>
              <div class="info-2">
                <div class="info-img fl">
                  <img src="../../assets/dataShowImg/info-img-3.png" alt="" />
                </div>
                <div class="info-text fl">
                  <p>目标库</p>
                  <p>29</p>
                </div>
              </div>
              <div class="info-3">
                <div class="info-img fl">
                  <img src="../../assets/dataShowImg/icon3.png" alt="" />
                </div>
                <div class="info-text fl">
                  <p>模型库</p>
                  <p id="mxk_num">5</p>
                </div>
              </div>
              <!-- <div class="info-4">
                <div class="info-img fl">
                  <img src="../../assets/dataShowImg/info-img-4.png" alt="" />
                </div>
                <div class="info-text fl">
                  <p>干扰库</p>
                  <p>15</p>
                </div>
              </div> -->
            </div>
          </div>
          <div class="top-bottom">
            <div class="title">样本库</div>
            <img src="../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
            <img src="../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
            <img src="../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
            <img src="../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
            <div id="echarts_1" class="charts"></div>
          </div>
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="con-right fr">
        <div class="right-top">
          <div class="title">目标库</div>
          <img src="../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
          <img src="../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
          <img src="../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
          <img src="../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
          <div id="echarts_5" class="charts"></div>
        </div>
        <div class="right-center">
          <div class="title">模型库</div>
          <img src="../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
          <img src="../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
          <img src="../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
          <img src="../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
          <div id="echarts_my" class="charts"></div>
        </div>
      </div>

      <!-- 中间区域 -->
      <div class="con-center fc">
        <!-- <div class="center-top">
          <div class="title">知识库结构图</div>
          <img src="../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
          <img src="../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
          <img src="../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
          <img src="../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
          <div id="echarts" class="charts">
            <img class="pic_structure" src="../../assets/dataShowImg/pic_structure(1).png" alt="" />
          </div>
        </div> -->
        <div class="center-bottom">
          <div class="title">知识问答</div>
          <img src="../../assets/dataShowImg/bj-1.png" alt="" class="bj-1" />
          <img src="../../assets/dataShowImg/bj-2.png" alt="" class="bj-2" />
          <img src="../../assets/dataShowImg/bj-3.png" alt="" class="bj-3" />
          <img src="../../assets/dataShowImg/bj-4.png" alt="" class="bj-4" />
          <!-- <div id="echarts" class="charts"></div> -->
          <div>
            <robot></robot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Robot from '../robot/Robot'
import { echarts1, echarts5 } from '../../assets/dataShowJs/mycharts.js'
import * as echart from 'echarts'
export default {
  name: 'right-center',
  components: {
    Robot
  },
  data () {
    return {
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 100
      },
      echarts_my: null,
      optionData: [1, 1, 1, 1, 1]
    }
  },
  // 在mounted中才有dom元素，created中没有
  mounted () {
    echarts1()
    // echarts4()
    echarts5()
    // echarts6()
    this.drawEcharts_my()
  },
  methods: {
    toHomePage () {
      this.$router.push({ name: 'home' })
    },
    async drawEcharts_my () {
      const { data: res } = await this.$http.get('echarts_my', { params: this.queryInfo })
      // p标签
      var ptext = document.getElementById('mxk_num')
      ptext.innerHTML = res.num
      // console.log(ptext)
      // echarts
      var Data = Object.values(res)
      console.log(Data.pop())
      this.optionData = Data
      this.echarts_my = echart.init(document.getElementById('echarts_my'))
      var xData = ['行为识别', '脉内调制', '信号分选', '个体识别', '状态识别']
      var option = {
        tooltip: {
          show: 'true',
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0.2)', // 背景
          padding: [1, 1], // 内边距
          textStyle: {
            color: 'rgba(249,249,249,1)'
          },
          formatter: function (params) {
            if (params.seriesName !== '') {
              return params.name + ' ：  ' + params.value + ' 个model'
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
        xAxis: [
          {
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
            },
            data: xData
          },
          {
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
          }
        ],
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
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: new echart.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00c0e9'
                }, {
                  offset: 1,
                  color: '#3b73cf'
                }]),
                barBorderRadius: 50,
                borderWidth: 0
              },
              emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(105,123, 214, 0.7)'
              }
            },
            zlevel: 2,
            barWidth: '20%',
            data: this.optionData
            // data: [2, 4, 8, 1, 1]
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
            data: [8, 8, 8, 8, 8]// 修改y轴最大显示值
          }
        ]
      }
      this.echarts_my.setOption(option)
      window.addEventListener('resize', function () {
        this.echarts_my.resize()
      })
    }
  }
}

</script>

<style scoped src="@/assets/dataShowCss/common.css"></style>
<style scoped src="@/assets/dataShowCss/map.css"></style>

<style scoped>
.pic_structure{
  padding-left: 152px;
  padding-top: 10px;
  color: #16e092
;
}
</style>
