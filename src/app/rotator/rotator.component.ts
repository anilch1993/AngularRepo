import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.css']
})
export class RotatorComponent implements OnInit {
  @Input() showRotator:boolean;
  constructor() { }

  ngOnInit() {
  }

}
