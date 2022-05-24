import { ElMessage } from 'element-plus'
export const useCopy=(text:string)=>{
    // let input = document.createElement('input')
    // input.value=text
    // document.body.appendChild(input)
    // input.select()
    // document.execCommand('Copy')
    // document.body.removeChild(input)
    // // 提示用户
    // ElMessage.success('复制成功')

    // 创建输入框
    let input = document.createElement('input')
    // 给输入框value赋值
    input.value = text
    // 追加到body里面去
    document.body.appendChild(input)
    // 选择输入框的操作
    input.select()
    // 执行复制操作
    let res=document.execCommand('copy')
    console.log(res)
    // 删除加入的输入框
    document.body.removeChild(input)
    // 提示用户
    ElMessage.success('复制成功')
}