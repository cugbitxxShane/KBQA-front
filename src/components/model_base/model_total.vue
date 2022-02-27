<template>
  <div class="page-wrapper">
    <el-card class="box-card">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>模型库</el-breadcrumb-item>
            <el-breadcrumb-item>模型列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索 -->
        <el-row class="serachRow">
        </el-row>
        <!-- 表格 -->
        <div class="table-wrapper">
          <el-table :data="tableData" height="750" border @current-change="handleCurrentRow" style="width: 100%">
              <el-table-column type="index" label="模型编号" align="center" width="200"> </el-table-column>
              <el-table-column prop="model_type" label="模型类型" align="center" sortable="true" ></el-table-column>
              <el-table-column prop="model_name" label="模型名称" align="center" width="200" ></el-table-column>
              <el-table-column prop="model_time" label="入库时间" align="center" ></el-table-column>
          </el-table>
        </div>
        <!-- 分页控件 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pageNum"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="queryInfo.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 10
      },
      total: 0,
      // 表格绑定的数据
      tableData: [
        { model_type: 'behavior recognition', model_name: 'HSS-LSTM', model_time: '2021-11-18 11:36:29', model_save_path: '/home/vip/jcjq_model_save/behavior_recognition' },
        { model_type: 'behavior recognition', model_name: 'HSS-LSTM', model_time: '2021-11-18 11:36:29', model_save_path: '/home/vip/jcjq_model_save/behavior_recognition' },
        { model_type: 'behavior recognition', model_name: 'HSS-LSTM', model_time: '2021-11-18 11:36:29', model_save_path: '/home/vip/jcjq_model_save/behavior_recognition' },
        { model_type: 'behavior recognition', model_name: 'HSS-LSTM', model_time: '2021-11-18 11:36:29', model_save_path: '/home/vip/jcjq_model_save/behavior_recognition' },
        { model_type: 'behavior recognition', model_name: 'HSS-LSTM', model_time: '2021-11-18 11:36:29', model_save_path: '/home/vip/jcjq_model_save/behavior_recognition' }
      ],
      currentRow: null
    }
  },
  created () {
    this.getTableData()
  },
  beforeMount () {
  },
  methods: {
    handleSizeChange (val) {
      this.queryInfo.pageSize = val
      this.queryInfo.pageNum = 1
      this.getTableData()
    },
    handleCurrentChange (val) {
      this.queryInfo.pageNum = val
      this.getTableData()
    },
    async getTableData () {
      const { data: res } = await this.$http.get('modelTotal', { params: this.queryInfo })
      this.tableData = res.data
      this.total = res.ItemNumbers
    },
    handleCurrentRow (val) {
      this.currentRow = val
      console.log(this.currentRow)
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
        margin-top: 20px;
        margin-bottom: 5px;
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
      border-left: 0;
      border-right: 0;
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
      font-size:18px
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
