<template>
  <div class="app-container">

    <!--搜索表单-->
    <!-- <el-form :inline="true" :model="searchSubject" class="demo-form-inline">
      <el-form-item label="Subject name">
        <el-input
          v-model="searchSubject.name"
          placeholder="Please enter subject name"
        />
      </el-form-item>
      <el-form-item label="Department">
        <el-input
          v-model="searchSubject.dept"
          placeholder="Please enter department"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button type="info" @click="clear">Clear</el-button>
      </el-form-item>
    </el-form> -->

    <!--按钮-->
    <el-row>
      <el-button type="danger" size="medium" @click="deleteByIds">- Batch Deletion</el-button>
      <el-button type="primary" size="medium" @click="dialogVisible = true; subject={};">+ Add New Subject</el-button>
    </el-row>

    <!--添加数据对话框表单-->
    <el-dialog ref="form" title="Add New Subject" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="subject" label-width="80px" size="mini">
        <el-form-item label="Name">
          <el-input v-model="subject.name" placeholder="Please enter subject name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Dept">
          <el-select v-model="subject.deptId" placeholder="Please choose" style="width:100%">
            <el-option
              v-for="item in deptList"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Credit Hrs">
          <el-input v-model="subject.hours" placeholder="Please enter credit hours" autocomplete="off" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="add">Sumbit</el-button>
          <el-button @click="dialogVisible = false">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <br>
    <!--表格-->
    <template>
      <el-table :data="tableData" style="width: 100%" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column prop="name" label="Subject Name" align="center" />
        <el-table-column prop="deptId" label="Department" align="center">
          <template slot-scope="{ row }">
            {{ getDeptNameById(row.deptId) }}
          </template>
        </el-table-column>
        <el-table-column prop="hours" label="Credit Hours" align="center" />

        <el-table-column align="center" label="Latest Updated">
          <template slot-scope="scope">
            {{ scope.row.updateTime ? scope.row.updateTime.replace('T',' '):'' }}
          </template>
        </el-table-column>

        <el-table-column align="center" label="Operation">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="update(scope.row.id)">Edit</el-button>
            <el-button type="danger" size="small" @click="deleteById(scope.row.id)">Delete</el-button>
          </template>
        </el-table-column>
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
import { page, add, update, deleteById, selectById } from '@/api/subject.js'
import { findAll } from '@/api/dept.js'
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
      searchSubject: {
        name: '',
        dept: ''
      },
      subject: {
        name: '',
        deptId: null,
        hours: ''
      },
      deptList: [],
      beginTime: '',
      endTime: '',

      // 被选中的id数组
      selectedIds: [],
      // 复选框选中数据集合
      multipleSelection: [],
      // 表格数据
      tableData: [],
      token: { token: getToken() }
    }
  },

  mounted() {
    this.page() // 当页面加载完成后，发送异步请求，获取数据
    findAll().then((result) => {
      this.deptList = result.data.data
    })
  },

  methods: {
    // 查询分页数据
    page() {
      page(
        this.searchSubject.name,
        this.searchSubject.dept,
        this.beginTime,
        this.endTime,
        this.currentPage,
        this.pageSize
      ).then((res) => {
        this.totalCount = res.data.data.total
        this.tableData = res.data.data.rows
      })
    },

    getDeptNameById(deptId) {
      const dept = this.deptList.find(dept => dept.id == deptId)
      return dept ? dept.name : ''
    },

    // 复选框选中后执行的方法
    handleSelectionChange(val) {
      this.multipleSelection = val
    },

    // 查询方法
    onSubmit() {
      this.currentPage = 1
      this.page()
    },

    clear() {
      this.searchSubject = { name: '', dept: '' }
      this.beginTime = ''
      this.endTime = ''
      this.page()
    },
    // 添加数据
    add() {
      let operator

      if (this.subject.id) {
        // 修改
        operator = update(this.subject)
      } else {
        operator = add(this.subject)
      }

      operator.then((resp) => {
        if (resp.data.code == '1') {
          this.dialogVisible = false
          this.page()
          this.$message({ message: 'Save Successful', type: 'success' })
          this.subject = {}
        } else {
          this.$message.error(resp.data.msg)
        }
      })
    },
    update(id) {
      // 1. 打开窗口
      this.dialogVisible = true
      // 2. 发送请求

      selectById(id).then((result) => {
        if (result.data.code == 1) {
          this.subject = result.data.data
          this.subject
        }
      })
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
    },

    // 删除员工信息
    deleteById(id) {
      this.$confirm('This operation will delete the data, do you want to continue?', 'Hint', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // 2. 发送AJAX请求
        deleteById(id).then((resp) => {
          if (resp.data.code == 1) {
            // 删除成功
            this.$message.success('Delete Successful')
            this.page()
          } else {
            this.$message.error(resp.data.msg)
          }
        })
      }).catch(() => {
        // 用户点击取消按钮
        this.$message.info('Cancel Delete')
      })
    },

    // 批量删除员工信息
    deleteByIds() {
      // 弹出确认提示框
      this.$confirm('This operation will delete the data, do you want to continue?', 'Hint', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        // 用户点击确认按钮
        // 1. 创建id数组, 从 this.multipleSelection 获取即可
        for (let i = 0; i < this.multipleSelection.length; i++) {
          this.selectedIds[i] = this.multipleSelection[i].id
        }

        // 2. 发送AJAX请求
        deleteById(this.selectedIds).then((resp) => {
          if (resp.data.code == '1') {
            // 删除成功
            this.$message.success('Delete Successful')
            this.page()
          } else {
            this.$message.error(resp.data.msg)
          }
        })
      }).catch(() => {
        // 用户点击取消按钮
        this.$message.info('Cancel Delete')
      })
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
