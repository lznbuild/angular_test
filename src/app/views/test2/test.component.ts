import { Component, OnInit,Input } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() count:number;
  profileForm:FormGroup
  constructor() { }
  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.valid);
  }



  ngOnChanges() {
    console.log("ng onchanges 数据发生变化时调用testtw");
  }

}
