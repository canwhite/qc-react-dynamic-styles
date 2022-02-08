import React from 'react';
// import logo from './logo.svg';
import mstyle from "./App.less"
import classnames from "classnames/bind"; //建立绑定关系
import * as XLSX from 'xlsx';
let cx = classnames.bind(mstyle);

/* -----------------------------------------------------------
//动态操作
return (
  <div>
    <h1 className={
      cx({	//声明样式对象
        success:true,
        error:this.props.error	//从标签属性中读取传过来的值
      })
    }>
  这是提示信息
  </h1>
  </div>
); 
--------------------------------------------------------------*/


function App() {
  const fileInputChange = (event:any)=>{

    //内置一个函数
    const file = event.target.files[0];
    //判断文件类型
    var fileTypes = [".xlsx", ".xmind"];
    var fileName = file.name;
    var fileEnd = fileName.substring(fileName.indexOf("."));
    console.log("end",fileEnd);
    let isNext:boolean = false;
    for (var i = 0; i < fileTypes.length; i++) {
      if (fileTypes[i] === fileEnd) {
          isNext = true;
          break;
      }
    }
    if (!isNext){
        alert('不接受此文件类型');
        file.value = "";
        return false;
    }
  } 

  return (
    <div className={cx("App")}>
         <p> 
          <input type="file" id="name" name="name"  onChange = {fileInputChange} />
        </p>
    </div>
  );
}

export default App;
