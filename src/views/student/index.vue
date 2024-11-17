<template>
  <div class="app-container">

    <!--搜索表单-->
    <el-form :inline="true" :model="searchStudent" class="demo-form-inline">
      <el-form-item label="Student Name">
        <el-input
          v-model="searchStudent.name"
          placeholder="Please enter student name"
        />
      </el-form-item>
      <el-form-item label="Gender">
        <el-select v-model="searchStudent.gender" placeholder="Please choose">
          <el-option label="Male" value="1" />
          <el-option label="Female" value="2" />
        </el-select>
      </el-form-item>

      <el-form-item label="Entry Date">
        <el-date-picker
          v-model="entrydate"
          clearable
          value-format="yyyy-MM-dd"
          type="daterange"
          placeholder="Choose date"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          style="width: 400px; margin-left: 20px"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Search</el-button>
        <el-button type="info" @click="clear">Clear</el-button>
      </el-form-item>
    </el-form>

    <!--按钮-->
    <el-row>
      <el-button type="danger" size="medium" @click="deleteByIds">- Batch Deletion</el-button>
      <el-button type="primary" size="medium" @click="dialogVisible = true; student = { image: ''};">+ Add New Student</el-button>
    </el-row>

    <!--添加数据对话框表单-->
    <el-dialog ref="form" title="Add New Student" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="student" label-width="80px" size="mini">
        <el-form-item label="Name">
          <el-input v-model="student.name" placeholder="Please enter student name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Matric No">
          <el-input v-model="student.matric" placeholder="Please enter matric number" autocomplete="off" />
        </el-form-item>

        <el-form-item label="Gender">
          <el-select v-model="student.gender" placeholder="Please choose" style="width:100%">
            <el-option
              v-for="item in genderList"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="Avatar">
          <el-upload
            class="avatar-uploader"
            action="/api/upload"
            :headers="token"
            name="image"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="student.image" :src="student.image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>

        <el-form-item label="Address">
          <el-input v-model="student.address" placeholder="Please enter address" autocomplete="off" />
        </el-form-item>

        <el-form-item label="Email">
          <el-input v-model="student.email" placeholder="Please enter email" autocomplete="off" />
        </el-form-item>

        <el-form-item label="Phone No">
          <el-input v-model="student.phone" placeholder="Please enter phone number" autocomplete="off" />
        </el-form-item>

        <el-form-item label="Course">
          <el-select v-model="student.courseId" placeholder="Please choose" value-key="student.course" style="width:100%">
            <el-option
              v-for="item in courseList"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="EntryDate">
          <el-date-picker
            v-model="student.entrydate"
            value-format="yyyy-MM-dd"
            clearable
            type="date"
            placeholder="Choose date"
            size="small"
            style="width:100%"
          />
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
        <el-table-column prop="name" label="Student Name" align="center" />
        <el-table-column prop="matric" label="Matric Number" align="center" />
        <el-table-column prop="image" label="Avatar" align="center">
          <template slot-scope="{ row }">
            <el-image style="width: auto; height: 40px; border: none; cursor: pointer" :src="row.image" />
          </template>
        </el-table-column>

        <el-table-column align="center" label="Gender">
          <template slot-scope="scope">
            <span style="margin-right: 10px">
              {{ scope.row.gender == "1" ? "Male" : "Female" }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="Address" align="center" />
        <el-table-column prop="email" label="Email" align="center" />
        <el-table-column prop="phone" label="Phone Number" align="center" />
        <el-table-column prop="courseId" label="Course" align="center">
          <template slot-scope="{ row }">
            {{ getCourseNameById(row.courseId) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="Entry Date">
          <template slot-scope="scope">
            {{ scope.row.entrydate }}
          </template>
        </el-table-column>
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
import { page, add, update, deleteById, selectById } from '@/api/student.js'
import { findAll } from '@/api/course.js'
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
      searchStudent: {
        name: '',
        gender: ''
      },
      student: {
        image: '',
        courseId: null
      },
      courseList: [],
      genderList: [{ id: 1, name: 'Male' }, { id: 2, name: 'Female' }],

      beginTime: '',
      endTime: '',
      entrydate: '',

      // 被选中的id数组
      selectedIds: [],
      // 复选框选中数据集合
      multipleSelection: [],
      // 表格数据
      tableData: [],
      token: { token: getToken() }
    }
  },

  watch: {
    entrydate(val) {
      if (val && val.length >= 2) {
        this.beginTime = val[0]
        this.endTime = val[1]
      } else {
        this.beginTime = ''
        this.endTime = ''
      }
    }
  },

  mounted() {
    this.page()
    // 当页面加载完成后，发送异步请求，获取数据
    findAll().then((result) => {
      this.courseList = result.data.data
    })
  },

  methods: {
    // 查询分页数据
    page() {
      page(
        this.searchStudent.name,
        this.searchStudent.gender,
        this.beginTime,
        this.endTime,
        this.currentPage,
        this.pageSize
      ).then((res) => {
        this.totalCount = res.data.data.total
        this.tableData = res.data.data.rows
      })
    },

    getCourseNameById(courseId) {
      const course = this.courseList.find(course => course.id == courseId)
      return course ? course.name : ''
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
      this.searchStudent = { name: '', gender: '' }
      this.beginTime = ''
      this.endTime = ''
      this.entrydate = ''
      this.page()
    },
    // 添加数据
    add() {
      let operator

      if (this.student.id) {
        // 修改
        operator = update(this.student)
      } else {
        operator = add(this.student)
      }

      operator.then((resp) => {
        if (resp.data.code == '1') {
          this.dialogVisible = false
          this.page()
          this.$message({ message: 'Save Successful', type: 'success' })
          this.student = { image: '' }
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
          this.student = result.data.data
          this.student
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
    },

    // 文件上传相关
    handleAvatarSuccess(res, file) {
      this.student.image = res.data
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('Upload avatar pictures can only be in JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('The size of the uploaded avatar image cannot exceed 2MB!')
      }
      return isJPG && isLt2M
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

