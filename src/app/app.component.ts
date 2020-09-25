import { Component } from '@angular/core';


// 参数被称为元数据 ，此组件和模板，共同组成了视图
@Component({
  selector: "app-root1", // 当前组件的选择器
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "lznbuild";
  content = "content";
  htmlStr = "<b>123</b><style>div{color:black;}</style>";
  arr = ["11", "22"];
  classObj = {
    normal: true,
    active: true
  };
  getMsg = "无";

  handleClick(e, i) {
    console.log(e, i);
    // console.log(input1);
  }

  getEvent(event) {
    console.log(event, "来了");
    this.getMsg = event.msg;
  }

  constructor() {
    // console.log("constructor调用");
  }

  // ngOnInit() {
  //   console.log("第一次显示数据绑定和指令输入属性后调用，只调用一次");
  // }

  // ngDoCheck() {
  //   console.log("进行检测");
  // }

  // ngAfterContentInit() {
  //   console.log("数据内容渲染到视图上之后调用");
  // }

  // ngAfterContentChecked() {
  //   console.log("数据内容渲染到视图检测之后检测");
  // }

  // ngAfterViewInit() {
  //   console.log("完成组件和子组件的初始化完成");
  // }

  // ngAfterViewChecked() {
  //   console.log("完成组件和子组件的初始化完成检测");
  // }

  // ngOnChanges() {
  //   console.log("数据发生变化之前调用");
  // }

  // ngOnDestory() {
  //   console.log("销毁");
  // }
}
