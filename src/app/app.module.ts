import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LcPipe } from "./filter/lc.pipe";

import { LcstyleDirective } from "./directive/lcstyle.directive";

import { AppComponent } from "./app.component";
import { ChildComponent } from "./views/child/child.component";
import { NewsComponent } from "./views/news/news.component";
import { TestComponent } from './views/test2/test.component';


// NgModule 为其中的组件提供了一个编译上下文环境
// NgModule 的参数用来描述AppModule模块
// declarations 声明当前模块使用的组件，指令，管道 
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LcPipe,
    ChildComponent,
    LcstyleDirective,
    TestComponent,
  ],
  // 此模块需要来自BrowserModule中的素材
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: "page1",
        component: ChildComponent
      },
      {
        path: "page2",
        component: NewsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent] // 根组件
})
export class AppModule {}
