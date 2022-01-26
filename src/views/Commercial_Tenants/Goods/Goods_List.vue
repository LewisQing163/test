商品显示
<template>
    <div id="background">
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
                <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
                </v-form-render>
                <el-button type="primary" @click="submitForm">添加</el-button>
            </div>
        </el-main>

        <el-footer>
            <div>
                <el-table :data="tableData" height="250" border style="width: 100%">
                    <el-table-column prop="date" label="商品图片" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="商品条码" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="商品名称" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="单位" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="品牌" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="售价" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="添加时间" width="180">
                    </el-table-column>
                    <el-table-column label="操作" width="180">
                        <el-button type="text" @click="Update">编辑</el-button>
                        <el-button type="text">删除</el-button>
                    </el-table-column>
                </el-table>
            </div>
        </el-footer>
    </div>
</template>


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
                }],

                formJson: { "widgetList": [{ "type": "button", "icon": "button", "formItemFlag": false, "options": { "name": "button100072", "label": "添加", "columnWidth": "200px", "size": "", "disabled": false, "hidden": false, "type": "", "plain": false, "round": false, "circle": false, "icon": null, "customClass": "", "onCreated": "", "onMounted": "", "onClick": "" }, "id": "button100072" }, { "type": "input", "icon": "text-field", "formItemFlag": true, "options": { "name": "input86994", "label": "商品名称", "labelAlign": "", "type": "text", "defaultValue": "", "placeholder": "", "columnWidth": "200px", "size": "", "labelWidth": null, "labelHidden": false, "readonly": false, "disabled": false, "hidden": false, "clearable": true, "showPassword": false, "required": false, "validation": "", "validationHint": "", "customClass": [], "labelIconClass": null, "labelIconPosition": "rear", "labelTooltip": null, "minLength": null, "maxLength": null, "showWordLimit": false, "prefixIcon": "", "suffixIcon": "", "appendButton": false, "appendButtonDisabled": false, "buttonIcon": "el-icon-search", "onCreated": "", "onMounted": "", "onInput": "", "onChange": "", "onFocus": "", "onBlur": "", "onValidate": "" }, "id": "input86994" }], "formConfig": { "modelName": "formData", "refName": "vForm", "rulesName": "rules", "labelWidth": 80, "labelPosition": "left", "size": "", "labelAlign": "label-left-align", "cssCode": "", "customClass": "", "functions": "", "layoutType": "PC", "onFormCreated": "", "onFormMounted": "", "onFormDataChange": "" } },
                formData: {},
                optionData: {}
            }
        },
        methods: {

            submitForm() {
                
                this.$refs.vFormRef.getFormData().then(formData => {
                    // Form Validation OK
                    alert(JSON.stringify(formData))
                }).catch(error => {
                    // Form Validation failed
                    this.$message.error(error)
                })
            },
            //编辑
            Update() {
                this.$router.push('Goods_Update')
            },
            //添加
            Add() {
                this.$router.push('Goods_Add')
            }
        }

    }
</script>