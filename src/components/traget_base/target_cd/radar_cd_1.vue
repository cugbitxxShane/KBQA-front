<template>
  <div class="page-wrapper">
    <el-card class="box-card">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>目标库</el-breadcrumb-item>
            <el-breadcrumb-item>雷达集一</el-breadcrumb-item>
            <el-breadcrumb-item>目标一</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索 -->
          <el-row class="serachRow">
              <el-col></el-col>
          </el-row>
        <!-- 表格 -->
        <div class="table-wrapper">
          <el-table :data="tableData" height="600" border style="width: 100%">
              <el-table-column prop="radar_type" label="雷达类型" align="center" width="140"></el-table-column>
              <el-table-column prop="state_num" label="状态编号" align="center" width="90"></el-table-column>
              <el-table-column prop="rf_type" label="载频调制类型" align="center" width="110"></el-table-column>
              <el-table-column prop="rf_value" label="载频参数（MHz）" align="center" width="160"></el-table-column>
              <el-table-column prop="pulse_width" label="脉宽（us）" align="center" width="130"></el-table-column>
              <el-table-column prop="pri_type" label="重频调制类型" align="center" width="150"></el-table-column>
              <el-table-column prop="pri_value" label="重频参数（us）" align="center" width="170"></el-table-column>
              <el-table-column prop="nunber_of_pulse_per_group" label="每组内脉冲数" align="center" width="150"></el-table-column>
              <el-table-column prop="intra_pulse_modulation_type" label="脉内调制类型" align="center" width="160"></el-table-column>
              <el-table-column prop="intra_pulse_modulation_value" label="脉内调制参数（MHz）" align="center" width="190"></el-table-column>
              <el-table-column prop="radar_id" label="关联雷达" align="center" width=""></el-table-column>
          </el-table>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表格绑定的数据
      tableData: [],
      currentRow: null
    }
  },
  created () {
    this.getTableData()
  },
  beforeMount () {
  },
  methods: {
    async getTableData () {
      const { data: res } = await this.$http.get('radarCd1', { params: this.queryInfo })
      this.tableData = res.data
    }
  }

}
</script>

<style scoped>
    .box-card{
        height: 100%;
        background-color: transparent;
        border: none;
    }
    .inputSearch{
        width: 300px;
        margin-right: 10px;
    }
    .serachRow{
        margin-top: 60px;
        margin-bottom: 5px;
    }
    .changeBtn{
      margin-left: 1520px;
    }
    /* 表格的背景色 */
    .table-wrapper{
      background-color: rgb(2, 2, 49);
      /* opacity: 0.9; */
    }

    .table-wrapper /deep/ .el-table{
      background-color: transparent !important;
    }
    /* 定义表头样式 */
    .table-wrapper >>> .el-table th{
      background-color: transparent !important;
      border-bottom: 1px solid #5078fc;
      /* 定义表头无左右分割线 */
      border-left: 0.5;
      border-right: 0.5;
    }
    /* 定义行的样式 */
    .table-wrapper /deep/ .el-table tr{
      background-color: transparent !important;
      border: none !important;
    }
    /* 定义表格行无分割线 */
    .table-wrapper /deep/ .el-table td{
      border: none !important;
    }
    /*  */
    .table-wrapper /deep/ .el-table--enable-row-transition .el-table_body td, /deep/ .el-table .cell{
      background-color: transparent;
      color: rgba(255, 255, 255, 0.85);
      border: none !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      font-size:15px
    }
    /deep/ .el-table--enable-row-hover .el-table__body tr:hover>td{
      background-color: #082e96 !important;
    }
    /* 设置表头字符颜色 */
    /deep/ .el-table th>.cell{
      color: rgba(254,254,254,1);
    }
    /* 加颜色点 */
    /deep/.el-table td:nth-child(1):before {
      content: "";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      background: #5078fc;
      top: 20px;
      border-radius: 100%;
      margin-left: 15px;
    }
  /deep/.el-table tr:nth-child(1) td:nth-child(1):before {
      content: "";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      background: #fe3548;
      top: 20px;
      border-radius: 100%;
  }
  /deep/.el-table tr:nth-child(2) td:nth-child(1):before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    background: #ffb343;
    top: 20px;
    border-radius: 100%;
  }
  /deep/.el-table tr:nth-child(3) td:nth-child(1):before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    background: #13c77c;
    top: 20px;
    border-radius: 100%;
  }
  /deep/.el-table tr:nth-child(4) td:nth-child(1):before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    background: #c626cc;
    top: 20px;
    border-radius: 100%;
  }
  /deep/.el-table tr:nth-child(5) td:nth-child(1):before {
    content: "";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    background: #03a9f4;
    top: 20px;
    border-radius: 100%;
  }
  /* 面包屑的字体颜色调整 */
  /deep/ .el-breadcrumb__inner{
    color: rgba(254,254,254,1) !important;
  }
  /* 面包屑的箭头颜色调整 */
  /deep/ .el-breadcrumb__separator{
    color: rgb(179, 253, 7) !important;
  }
  /*  */
  .el-pagination{
    background-color: transparent;
  }
  /deep/ .el-pagination__total,/deep/ .el-pagination__jump,/deep/ .el-pagination__editor{
    color: rgb(245, 243, 243) !important;
  }

</style>
