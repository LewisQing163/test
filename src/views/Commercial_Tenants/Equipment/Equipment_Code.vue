<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
           <el-table
        :data="data"
        border
        prop="name"
        style="width: 100%">
        <el-table-column
          prop="name"
          label='参数名'>
          
        </el-table-column>

        <el-table-column
          prop="data"
          label="参数">
          
        </el-table-column>
      </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          
        </div>
      </el-col>
    </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>