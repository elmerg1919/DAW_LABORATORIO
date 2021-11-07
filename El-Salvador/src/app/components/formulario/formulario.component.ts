import { Component, OnInit } from '@angular/core';
declare var funcion1:any;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  validate(){
    funcion1;
  }

}
