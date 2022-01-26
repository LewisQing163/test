商品显示
<template>
  <!-- <div class="about">
    <h1>商品显示</h1>
  </div> -->

  <div id="background">
    <el-container>
      <el-header>
        <div id="log">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                1
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                2
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                3
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                4
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <div>
          <el-row :gutter="15">
            <el-form
              ref="elForm"
              :model="formData"
              :rules="rules"
              size="medium"
              label-width="100px"
            >
              <el-col :span="7">
                <el-form-item label="设备编号" prop="field101">
                  <el-input placeholder="请输入设备编号"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="设备名称" prop="field103">
                  <el-input placeholder="请输入设备名称"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="生产编号" prop="field102">
                  <el-input placeholder="请输入生产编号"> </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="产品型号" prop="field110">
                  <el-select placeholder="请输入单行文本">
                    <el-option
                      v-for="(item, index) in field110Options"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="产品类型" prop="field110">
                  <el-select placeholder="请输入单行文本">
                    <el-option
                      v-for="(item, index) in field110Options"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="售卖状态" prop="field110">
                  <el-select placeholder="请输入单行文本">
                    <el-option
                      v-for="(item, index) in field110Options"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item size="large" id="fu">
                  <el-button id="ti">提交</el-button>
                  <el-button>重置</el-button>
                </el-form-item>
              </el-col>
            </el-form>
          </el-row>
        </div>
      </el-main>
      <el-footer>
         <div>
          <el-table :data="tableData" height="250" border style="width: 100%">
            <el-table-column prop="date" label="设备ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="设备编号" width="180">
            </el-table-column>
            <el-table-column prop="address" label="设备名称" width="180">
            </el-table-column>
             <el-table-column prop="address" label="产品型号" width="180">
            </el-table-column>
             <el-table-column prop="address" label="生产编号" width="180">
            </el-table-column>
             <el-table-column prop="address" label="网络状态" width="180">
            </el-table-column>
             <el-table-column prop="address" label="在线状态" width="180">
            </el-table-column>
             <el-table-column prop="address" label="售卖状态" width="180">
            </el-table-column>
             <el-table-column prop="address" label="激活时间" width="180">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <el-button type="text">运营配置</el-button>
                <el-button type="text">文字按钮</el-button>
            </el-table-column>
          </el-table>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>


<style >
#log {
  background-color: #ff0000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#fu {
  float: right;
}
#ti {
  background-color: blue;
  color: aliceblue;
}
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>



