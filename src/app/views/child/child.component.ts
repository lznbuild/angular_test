import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input() content111;
  @Output() childMsg = new EventEmitter();
  constructor() {}
  sendMsg() {
    console.log('执行');
    this.childMsg.emit({msg:'子元素的消息'})
  }

  ngOnInit(): void {}
}
