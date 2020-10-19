import { Component, OnInit,Input } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() count:number;
  profileForm:FormGroup;
  newcount:number;
  constructor() { 
    console.log(this.count,'count===')
  }
  ngOnInit() {
    console.log("ng oninit ========child");
    this.newcount = this.count;
    // setInterval(()=> {
    //   this.newcount++
    // },1000)

    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }



  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.valid);
  }

  logChildInfo() {
    console.log('child')
  }



  ngOnChanges() {
    console.log("ng onchanges 数据发生变化时调用==========child");
  }


 


  ngAfterContentInit() {
    console.log("ng after content init========child ");
  }

  ngAfterViewInit() {
    console.log("ng after view init========child ");
  }


  ngDoCheck() {
    console.log("ng do check==========child");
  }

  ngAfterContentChecked() {
    console.log("ng agter content checked =========child");
  }

  ngAfterViewChecked() {
    console.log("ng after view checked ========child");
  }

}
