<template>
  <div class="content">
    <div class="menu">
      <el-row class="tac">
        <el-col :span="12">
          <!-- <h5>自定义颜色</h5> -->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            router=true
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item :index="route.path" >选项1</el-menu-item>
                <el-menu-item :index="route.pathT">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
 <router-view />

    <!-- <div class="table">
      <el-table
        :data="tableData"
        style="width: 40%"
        max-height="530px"
        border
        :page-sizes="pagesizes"
        stripe
        header-cell-style="background-color: #DDE1E4;text-align: center"
      >
        <el-table-column prop="name" label="岗位名称" width="180"></el-table-column>
        <el-table-column prop="code" label="岗位编码" width="180"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total,prev, pager, next,sizes"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :pagesizes="pagesizes"
      />
    </div> -->
  </div>
</template>

  <script>
export default {
  data() {
    return {
     route:{
       path:'/index/table',
       pathT:'/index/page'
     }
    };
  },
  // //实例被创建之后执行代码
  // created: function() {
  //   this.getPostList(1, 10);
  // },
  methods: {
    // getPostList: function(current, pagesize) {
    //   this.$axios(
    //     "/v2/position?pageNum=" +
    //       current +
    //       "&pageSize=" +
    //       pagesize +
    //       "&isAdditional=true"
    //   )
    //     .then(
    //       response => (
    //         (this.tableData = response.data.data.list),
    //         (this.total = response.data.data.total),
    //         (this.pageCount = response.data.data.pages),
    //         (this.current = response.data.data.pageNum),
    //         (this.pagesize = response.data.data.pageSize)
    //       )
    //     )
    //     .catch(function(error) {
    //       // 请求失败处理
    //       console.log(error);
    //     });
    // },
    // handleCurrentChange: function(val) {
    //   this.current = val;
    //   this.getPostList(val, this.pagesize);
    // },
    // handleSizeChange: function(val) {
    //   this.pagesize = val;
    //   this.getPostList(this.current, val);
    // },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
/* .table {
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-content: center; */
  /* justify-content: space-around; */
/* } */ 
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.el-menu-vertical-demo{
  height: 800px;
  width: 200px;
}

</style>
