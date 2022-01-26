
<template>
    <div>
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
          <el-col :span="13">
            <el-form-item label="商品图片" prop="field107">
              <el-input v-model="formData.field107" placeholder="请输入商品图片" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="商品条码" prop="field101">
              <el-input v-model="formData.field101" placeholder="请输入商品条码" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="商品名称" prop="field108">
              <el-input v-model="formData.field108" placeholder="请输入商品名称" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="商品分类" prop="field114">
              <el-select v-model="formData.field114" placeholder="请选择商品分类" clearable :style="{width: '100%'}">
                <el-option v-for="(item, index) in field114Options" :key="index" :label="item.label"
                  :value="item.value" :disabled="item.disabled"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="单位" prop="field109">
              <el-input v-model="formData.field109" placeholder="请输入单位" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="品牌" prop="field110">
              <el-input v-model="formData.field110" placeholder="请输入品牌" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="售价" prop="field111">
              <el-input v-model="formData.field111" placeholder="请输入售价" clearable :style="{width: '100%'}">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item size="large">
              <el-button type="primary" @click="submitForm">提交</el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div>
  </template>
  <script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          field107: undefined,
          field101: undefined,
          field108: undefined,
          field114: undefined,
          field109: undefined,
          field110: undefined,
          field111: undefined,
        },
        rules: {
          field107: [{
            required: true,
            message: '请输入商品图片',
            trigger: 'blur'
          }],
          field101: [{
            required: true,
            message: '请输入商品条码',
            trigger: 'blur'
          }],
          field108: [{
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          }],
          field114: [{
            required: true,
            message: '请选择商品分类',
            trigger: 'change'
          }],
          field109: [{
            required: true,
            message: '请输入单位',
            trigger: 'blur'
          }],
          field110: [{
            required: true,
            message: '请输入品牌',
            trigger: 'blur'
          }],
          field111: [{
            required: true,
            message: '请输入售价',
            trigger: 'blur'
          }],
        },
        field114Options: [{
          "label": "选项一",
          "value": 1
        }, {
          "label": "选项二",
          "value": 2
        }],
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['elForm'].validate(valid => {
          if (!valid) return
          // TODO 提交表单
        })
      },
      resetForm() {
        this.$refs['elForm'].resetFields()
      },
    }
  }
  </script>
  <style>
  </style>
  