<template>
<!-- 页面布局容器 -->
  <el-container class="container">
    <!-- 头部导航栏 -->
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="icon">
            <img src="../../assets/icon.png" alt="error" />
          </div>
        </el-col>
        <el-col :span="18">
          <div class="middle">
            <h2 class="word">动态知识库展示系统</h2>
          </div>
        </el-col>
        <el-col class="toHellowPage" :span="2">
          <div class="hellowbtn">
            <el-button class="btn" type="info" @click="toHelloPage">首页</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <!-- 左侧边menu -->
    <el-container>
      <el-aside class="aside" width="220px">
        <el-menu
          :unique-opened="true"
          :router="true"
          background-color="#484d5f"
          text-color="#fff"
          active-text-color="#ffd04b">
          <!-- 样本库 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-receiving" style="color:#eaedf2"></i>
              <span>样本库</span>
            </template>
            <el-menu-item index="sample_signal_sort_pdw_cd">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>信号分选样本</span>
            </el-menu-item>
            <el-menu-item index="sample_intra_pulse_rec">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>脉内数据样本</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_cd_hr">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>火控雷达状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_cd_jr">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>警戒雷达状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_cd_mr">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>多功能雷达状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_l">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>l工作模式状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_p1">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>p1工作模式状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_p2">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>p2工作模式状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_s">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>s工作模式状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_x1">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>x1工作模式状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_x2">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>x2工作模式状态识别</span>
            </el-menu-item>
            <el-menu-item index="sample_state_rec_pdw_kdj_x3">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>x3工作模式状态识别</span>
            </el-menu-item>
            <!-- <el-menu-item index="behaviorPDW_Basic">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>行为PDW_基本表</span>
            </el-menu-item> -->
            <!-- <el-menu-item index="behaviorPDW_Data">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>行为PDW_数据表</span>
            </el-menu-item>
            <el-menu-item index="behaviorPDW_Mod">
              <i class="el-icon-pie-chart" style="color:#eaedf2"></i>
              <span>行为PDW_模式表</span>
            </el-menu-item>
            <el-menu-item index="emitterPDW_Basic">
              <i class="el-icon-files" style="color:#eaedf2"></i>
              <span>分选PDW_基本表</span>
            </el-menu-item>
            <el-menu-item index="emitterPDW_Data">
              <i class="el-icon-files" style="color:#eaedf2"></i>
              <span>分选PDW_数据表</span>
            </el-menu-item>
            <el-menu-item index="emitterPDW_Mod">
              <i class="el-icon-files" style="color:#eaedf2"></i>
              <span>分选PDW_模式表</span>
            </el-menu-item>
            <el-menu-item index="emitterWav_Basic">
              <i class="el-icon-files" style="color:#eaedf2"></i>
              <span>分选Wav_基本表</span>
            </el-menu-item>
            <el-menu-item index="emitterWav_Data">
              <i class="el-icon-files" style="color:#eaedf2"></i>
              <span>分选Wav_数据表</span>
            </el-menu-item>
            <el-menu-item index="emitterWav_Mod">
              <i class="el-icon-files" style="color:#eaedf2"></i>
              <span>分选Wav_模式表</span>
            </el-menu-item>
            <el-menu-item index="statusPDW_Basic">
              <i class="el-icon-film" style="color:#eaedf2"></i>
              <span>状态PDW_基本表</span>
            </el-menu-item>
            <el-menu-item index="statusPDW_Data">
              <i class="el-icon-film" style="color:#eaedf2"></i>
              <span>状态PDW_数据表</span>
            </el-menu-item>
            <el-menu-item index="statusPDW_Mod">
              <i class="el-icon-film" style="color:#eaedf2"></i>
              <span>状态PDW_模式表</span>
            </el-menu-item>
            <el-menu-item index="statusWav_Basic">
              <i class="el-icon-film" style="color:#eaedf2"></i>
              <span>状态Wav_基本表</span>
            </el-menu-item>
            <el-menu-item index="statusWav_Data">
              <i class="el-icon-film" style="color:#eaedf2"></i>
              <span>状态Wav_数据表</span>
            </el-menu-item> -->
          </el-submenu>
          <!-- 目标库 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-promotion" style="color:#eaedf2"></i>
              <span>目标库</span>
            </template>
              <!-- 总体描述表单 -->
              <el-menu-item index="target_total">
                <i class="el-icon-menu" style="color:#eaedf2"></i>
                <span>总体表单</span>
              </el-menu-item>
              <!-- 成都雷达 -->
              <el-submenu index="2-1">
                <template slot="title">
                  <i class="el-icon-menu" style="color:#eaedf2"></i>
                  <span>雷达集一</span>
                </template>
                <el-menu-item index="radar_cd_1">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标一</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_2">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标二</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_3">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标三</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_4">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标四</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_5">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标五</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_6">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标六</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_7">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标七</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_8">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标八</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_9">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标九</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_10">
                  <i class="el-icon-s-grid" style="color:#eaedf2"></i>
                  <span>目标十</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_state_11">
                  <i class="el-icon-s-open" style="color:#eaedf2"></i>
                  <span>目标十一</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_state_12">
                  <i class="el-icon-s-open" style="color:#eaedf2"></i>
                  <span>目标十二</span>
                </el-menu-item>
                <el-menu-item index="radar_cd_state_13">
                  <i class="el-icon-s-open" style="color:#eaedf2"></i>
                  <span>目标十三</span>
                </el-menu-item>
              </el-submenu>
              <!-- kdj雷达 -->
              <el-submenu index="2-4">
                <template slot="title">
                  <i class="el-icon-menu" style="color:#eaedf2"></i>
                  <span>雷达集二</span>
                </template>
                <el-menu-item index="radar_kdj_1">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标一</span>
                </el-menu-item>
                <el-menu-item index="radar_kdj_2">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标二</span>
                </el-menu-item>
                <el-menu-item index="radar_kdj_3">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标三</span>
                </el-menu-item>
                <el-menu-item index="radar_kdj_4">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标四</span>
                </el-menu-item>
                <el-menu-item index="radar_kdj_5">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标五</span>
                </el-menu-item>
                <el-menu-item index="radar_kdj_6">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标六</span>
                </el-menu-item>
                <el-menu-item index="radar_kdj_7">
                  <i class="el-icon-bangzhu" style="color:#eaedf2"></i>
                  <span>目标七</span>
                </el-menu-item>
              </el-submenu>
              <!-- 桂林雷达 -->
              <el-submenu index="2-2">
                <template slot="title">
                  <i class="el-icon-menu" style="color:#eaedf2"></i>
                  <span>雷达集三</span>
                </template>
                <el-menu-item index="radar_gl_1">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标一</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_2">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标二</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_3">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标三</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_4">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标四</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_5">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标五</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_6">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标六</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_7">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标七</span>
                </el-menu-item>
                <el-menu-item index="radar_gl_8">
                  <i class="el-icon-view" style="color:#eaedf2"></i>
                  <span>目标八</span>
                </el-menu-item>
              </el-submenu>
              <!-- 合肥模拟雷达 -->
              <el-submenu index="2-3">
                <template slot="title">
                  <i class="el-icon-menu" style="color:#eaedf2"></i>
                  <span>雷达集四</span>
                </template>
                <el-menu-item index="radar_hf_simu_1">
                  <i class="el-icon-coin" style="color:#eaedf2"></i>
                  <span>目标一</span>
                </el-menu-item>
              </el-submenu>
          </el-submenu>
          <!-- 模型库 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-coin" style="color:#eaedf2"></i>
              <span>模型库</span>
            </template>
            <el-menu-item index="model_total">
              <i class="el-icon-crop" style="color:#eaedf2"></i>
              <span>模型列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主页面 -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    toHelloPage () {
      this.$router.push({ name: 'hello' })
    }
  }
}
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #3068c2;
  text-emphasis-color: #84f108
}
.aside {
  background-color: #484d5f;
}
.main {
  background: url('../../assets/dataShowImg/map_bg.png') center;
}
.middle {
  text-align: center;
}
.toHellowPage {
  margin-top: 10px;
}
.hellowbtn {
  margin-left: 80px;
}
.el-menu{
  border-right: 0 !important;
}
.word {
  margin-block-start: 17px;
  color: rgb(255, 255, 255);;
}
</style>
