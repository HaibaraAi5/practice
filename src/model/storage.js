//封装操作 localStorage本地存储的方法  模块化文件
//node.js 基础
var storage={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value))

  },
  get(key){
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key){
    localStorage.removeItem(key)
  }
}

export default storage
