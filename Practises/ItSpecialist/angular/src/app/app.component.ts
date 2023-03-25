import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  inputValue = '';
  toggle:any = false;
  arr = [1, 1, 2, 3, 5, 8, 13];
  obj = [
    {title:'P1', author:'Parents', comments:[
        {name: 'Erik', text: 'Papa'},
        {name: 'Dariya', text: 'Mama'},
      ]},
    {title:'P2', author:'Brothers', comments:[
        {name: 'Bauyrzhan', text: 'Bauka'},
        {name: 'Bekzat', text: 'Beka'},
        {name: 'Maksat', text: 'Maks'}
      ]},
    {title:'P3', author:'Korshi', comments:[
        {name: 'Turgali aga', text: 'korshi'},
        {name: 'Kaish apai', text: 'korshi'},
      ]}
  ]

  constructor() {
  }

  onInput(event: any) {
    this.title = event.target.value
  }

  onBlur(str:string){
    this.inputValue = str
  }

  onClick(){
    console.log('Click!')
  }
}
