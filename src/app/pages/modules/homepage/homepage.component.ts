import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  @Input() respuesta;
  @Output() devuelta: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }

HijoAPadre(){

}

}
