<template>
  <div class="page-wrapper">
    <el-card class="box-card">
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>样本库</el-breadcrumb-item>
            <el-breadcrumb-item>状态Wav_数据表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索 -->
        <el-row class="serachRow">
            <el-col>
                <el-input placeholder="请输入内容" v-model="queryInfo.query" class="inputSearch" clearable @clear="getTableData">
                    <el-button slot="append" icon="el-icon-search" @click="getTableData"></el-button>
                </el-input>
                <!-- <el-button type="primary" @click="addDialogVisible = true">添加</el-button> -->
            </el-col>
        </el-row>
        <!-- 表格 -->
        <div class="table-wrapper">
        <el-table :data="tableData" height="650" border @current-change="handleCurrentRow" style="width: 100%">
                <el-table-column type="index" label="sampleNo" align="center" width="120"> </el-table-column>
                <el-table-column prop="sampleData" label="sampleData" align="center" width="140"></el-table-column>
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

    <!-- 新添加信息对话框 -->
    <el-dialog title="添加数据" :visible.sync="addDialogVisible" width="40%" @close="addDialogClose">
      <!-- 内容主体 -->
      <el-form :model = "addForm"  ref = "addFormRef" label-width="90px">
        <!-- 数据项 -->
        <el-form-item label="sampleData" prop="sampleData" label-width="120px">
          <el-input v-model="addForm.sampleData"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部控件 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addItem">确 定</el-button>
      </span>
    </el-dialog>
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
      tableData: [
      ],
      currentRow: null,
      addForm: {
        sampleData: ''
      },
      addDialogVisible: false
    }
  },
  created () {
    this.getTableData()
  },
  beforeMount () {
    // console.log(this.total)
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
      const { data: res } = await this.$http.get('statusWavdata', { params: this.queryInfo })
      this.tableData = res.data
      this.total = res.ItemNumbers
    },
    addDialogClose () {
      this.$refs.addFormRef.resetFields()
    },
    async addItem () {
      const { data: res } = await this.$http.post('statusWavdataaddItem', this.addForm)
      console.log(res)
      if (res !== 'success') {
        return this.$message.error('操作失败')
      }
      this.$message.success('操作成功')
      this.addDialogVisible = false
      this.getTableData()
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
