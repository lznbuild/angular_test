import { Component,ViewChild,ViewContainerRef,TemplateRef,ElementRef } from '@angular/core';


// 参数被称为元数据 ，此组件和模板，共同组成了视图
@Component({
  selector: "app-root1", // 当前组件的选择器
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('domTest') domTest: ElementRef;
  @ViewChild('childDom') childDom: TemplateRef<any>;
  @ViewChild('domTest') domTest2: TemplateRef<any>;
  @ViewChild('domTest',{read: ViewContainerRef}) domTest3:ViewContainerRef;

  title = "lznbuild";
  content = "content";
  htmlStr = "<b>123</b><style>div{color:black;}</style>";
  arr = ["11", "22"];
  classObj = {
    normal: true,
    active: true
  };
  getMsg = "无";
  count = 0;
  
  changeCount() {
    this.count+=1
  }

  handleClick(e, i) {
    console.log(e, i);
    // console.log(input1);
  }

  getEvent(event) {
    console.log(event, "来了");
    this.getMsg = event.msg;
  }

  getDom(dom) {
    console.log(dom)
  }

  onSubmit(formData){

    console.log(formData,'formData')
  }

  constructor() {
    console.log("constructor调用");
  }

  ngOnChanges() {
    console.log("ng onchanges 数据发生变化时调用");
  }

  ngOnInit() {
    console.log("ng oninit ");

  }


  ngAfterContentInit() {
    console.log("ng after content init ");
  }

  ngAfterViewInit() {
    console.log("ng after view init ");
    console.log(this.domTest,'11111111111')
    console.log(this.domTest2,'2222222222')
    console.log(this.domTest3,'4333333333')
    this.domTest3.createEmbeddedView(this.childDom) 

  }


  ngDoCheck() {
    console.log("ng do check");
  }

  ngAfterContentChecked() {
    console.log("ng agter content checked ");
  }

  ngAfterViewChecked() {
    console.log("ng after view checked ");
  }

  // ngOnDestory() {
  //   console.log("ng ondestory 销毁");
  // }
}
