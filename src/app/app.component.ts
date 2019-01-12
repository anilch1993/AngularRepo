import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNewProject';
  rotatorFlag = false;
  color = 'green';
  rotatorActive(){
    this.rotatorFlag = true;
    setTimeout(()=>{
      this.rotatorFlag = false;
    },5000)
  }
}
