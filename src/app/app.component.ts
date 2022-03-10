import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Demo } from './Demo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) { }

  title = 'devops-frontend';
  demo: Demo = new Demo()
  data: Demo = new Demo()

  click() {
    this.demo.title = this.title
    this.appService.getTitle(this.demo).subscribe(res => {
      console.log(res)
      this.data = res
    }, err => {
      console.log(err)
      this.data = err
    })
  }
}
