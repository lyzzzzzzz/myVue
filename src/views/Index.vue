<template>
  <div class="table">
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
  </div>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [],
      total: 20, //总条目数
      pageCount: 0, //总页数
      current: 1, //当前页数
      pagesize: 10, //每页条数
      pagesizes: [10, 20, 30, 40, 50, 100]
    };
  },
  //实例被创建之后执行代码
  created: function() {
    this.getPostList(1, 10);
  },
  methods: {
    getPostList: function(current, pagesize) {
      this.$axios(
        "/v2/position?pageNum=" +
          current +
          "&pageSize=" +
          pagesize +
          "&isAdditional=true"
      )
        .then(
          response => (
            (this.tableData = response.data.data.list),
            (this.total = response.data.data.total),
            (this.pageCount = response.data.data.pages),
            (this.current = response.data.data.pageNum),
            (this.pagesize = response.data.data.pageSize)
          )
        )
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    handleCurrentChange: function(val) {
      this.current = val;
      this.getPostList(val, this.pagesize);
    },
    handleSizeChange: function(val) {
      this.pagesize = val;
      this.getPostList(this.current, val);
    }
  }
};
</script>

<style>
.table {
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-content: center; */
  justify-content: space-around;
}
</style>
