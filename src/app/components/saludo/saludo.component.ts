import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo', //decorador
  templateUrl: './saludo.component.html', //llama el url del html
  styleUrls: ['./saludo.component.css'] //llama el url del css
})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
