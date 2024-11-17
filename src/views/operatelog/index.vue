<template>
  <div class="app-container">

    <!--搜索表单-->
    <el-form :inline="true" :model="searchOperatelog" class="demo-form-inline">
      <el-form-item label="Name">
        <el-input
          v-model="searchOperatelog.name"
          placeholder="Please enter name"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button type="info" @click="clear">Clear</el-button>
      </el-form-item>
    </el-form>

    <br>
    <!--表格-->
    <template>
      <el-table :data="tableData" style="width: 100%" border @selection-change="handleSelectionChange">
        <el-table-column type="index" width="100" label="No." header-align="center" align="center" />
        <el-table-column prop="operateName" label="Name" align="center" />
        <el-table-column prop="methodName" label="Method" align="center" />
        <el-table-column prop="methodParams" label="Content" align="center" />
        <el-table-column prop="operateTime" label="Operation Time" align="center" />
        <el-table-column prop="costTime" label="Time Consuming" align="center" />
      </el-table>
    </template>

    <!--分页工具条-->
    <el-pagination
      :background="background"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { page, find } from '@/api/operatelog.js'
import { getToken } from '@/utils/auth'

export default {
  data() {
    return {
      background: true,
      // 每页显示的条数
      pageSize: 5,
      // 总记录数
      totalCount: 100,
      // 当前页码
      currentPage: 1,
      // 添加数据对话框是否展示的标记
      dialogVisible: false,
      // 品牌模型数据
      searchOperatelog: {
        name: ''
      },
      // 表格数据
      tableData: [],
      token: { token: getToken() }
    }
  },

  mounted() {
    this.page() // 当页面加载完成后，发送异步请求，获取数据
    this.init() // 当页面加载完成后自动执行。
  },

  methods: {
    // 初始化 - 查询全部
    init() {
      find().then((result) => {
        console.log(result)
        if (result.data.code === 1) {
          this.tableData = result.data.data
        }
      })
    },

    // 查询分页数据
    page() {
      page(
        this.searchOperatelog.name,
        this.currentPage,
        this.pageSize
      ).then((res) => {
        this.totalCount = res.data.data.total
        this.tableData = res.data.data.rows
      })
    },

    // 查询方法
    onSubmit() {
      this.currentPage = 1
      this.page()
    },

    clear() {
      this.searchOperatelog = { name: '' }
      this.page()
    },

    // 分页
    handleSizeChange(val) {
      // 重新设置每页显示的条数
      this.pageSize = val
      this.page()
    },

    handleCurrentChange(val) {
      // 重新设置当前页码
      this.currentPage = val
      this.page()
    }
  }
}
</script>
  <style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  </style>
