设备配置

<template>
  <div>
    <el-container>
      <div>
        <el-header>
          <div>
            <el-row :gutter="15">
              <el-form
                ref="elForm"
                :model="formData"
                :rules="rules"
                size="medium"
                label-width="100px"
              >
                <div>
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
                </div>
                <div>
                  <el-col :span="18">
                    <el-form-item label="生产编号" prop="field102">
                      <el-input placeholder="请输入生产编号"> </el-input>
                    </el-form-item>
                  </el-col>
                </div>
                <el-col :span="7">
                  <el-form-item label="客服电话" prop="field102">
                    <el-input placeholder="请输入电话"> </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="设备备注" prop="field102">
                    <el-input placeholder="请输入备注"> </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <div class="block">
                    <el-form-item label="设备音量" prop="field102">
                      <el-slider v-model="value1"></el-slider>
                    </el-form-item>
                  </div>
                </el-col>
                <div></div>
              </el-form>
            </el-row>
          </div>
        </el-header>
      </div>
      <div>
        <el-main> </el-main>
      </div>
      <div><el-footer>Footer</el-footer></div>
    </el-container>
  </div>
</template>
