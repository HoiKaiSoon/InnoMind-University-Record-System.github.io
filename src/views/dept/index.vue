<template>
  <div style="margin-top: 20px; margin: 50px; margin-right: 100px">
    <!-- 按钮 -->

    <el-row>
      <el-button
        style="float: right"
        type="primary"
        @click="dialogFormVisible = true; dept={}"
      >+ Add New Department</el-button>
    </el-row>
    <br>
    <!-- 数据表格 -->
    <template>
      <el-table
        ref="multipleTable"
        highlight-current-row
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
      >
        <el-table-column type="index" width="100" label="No." header-align="center" align="center" />
        <el-table-column prop="name" label="Department Name" header-align="center" align="center" />
        <el-table-column label="Latest Updated" header-align="center" align="center">
          <template slot-scope="scope">
            {{ scope.row.updateTime ? scope.row.updateTime.replace('T',' '):'' }}
          </template>
        </el-table-column>

        <el-table-column label="Operation" width="420" header-align="center" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              plain
              @click="selectById(scope.row.id)"
            >Edit</el-button>

            <el-button
              size="mini"
              type="danger"
              plain
              @click="deleteById(scope.row.id)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- 新建对话框 -->

    <el-dialog title="Add New Department" :visible.sync="dialogFormVisible">
      <el-form :model="dept">
        <el-form-item label="Name" :label-width="formLabelWidth">
          <el-input v-model="dept.name" placeholder="Please enter department name" autocomplete="off" />
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="add()">Submit</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { findAll, add, update, deleteById, selectById } from '@/api/dept.js'

export default {
  data() {
    return {
      formLabelWidth: '120px',
      dialogFormVisible: false, // 控制对话框是否可见
      dept: {
        name: ''
      },
      tableData: []
    }
  },
  mounted() {
    // 当页面加载完成后自动执行。
    this.init()
  },

  methods: {

    // 删除部门
    deleteById(id) {
      this.$confirm('Confirm Delete?', 'Hint', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        deleteById(id).then((result) => {
          	if (result.data.code == 1) {
	          	this.$message({
	              message: 'Delete Successful',
	              type: 'success'
	            })
	          } else {
	        	  this.$message.error(result.data.msg)
	          }
          // 重新查询数据
          this.init()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Cancel Detele'
        })
      })
    },

    // 根据ID查询部门 -- 回显
    selectById(id) {
      this.dialogFormVisible = true
      selectById(id).then((result) => {
        this.dept = result.data.data
      })
    },

    // 保存方法
    add() {
      let method // 添加
      if (this.dept.id) {
        method = update(this.dept) // 修改
      } else {
        method = add(this.dept) // 添加
      }
      method.then((result) => {
        if (result.data.code == 1) {
          // 修改成功
          this.$message.success('Save Successful')
          // 重新查询数据
          this.init()
        } else {
          this.$message.error(result.data.msg)
        }
      })
      // 关闭新建窗口
      this.dialogFormVisible = false

      // 清空模型数据
      this.dept = {}
    },

    // 初始化 - 查询全部
    init() {
      findAll().then((result) => {
        console.log(result)
        if (result.data.code == 1) {
          this.tableData = result.data.data
        }
      })
    }
  }
}
</script>
<style>

</style>
