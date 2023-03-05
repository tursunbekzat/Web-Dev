import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  name:string | undefined;
  model: string | undefined;
  speed:number | undefined;
  colors!: Colors;
  options: string[] | undefined;
  test:any;
  constructor() {
  }

  ngOnInit() {
    if (true) {
      this.name = 'Audi'
      this.model = 'RS8';
      this.speed = 250;
      this.colors = {
        car: 'white',
        salon: 'black'
      }
    };
    this.options = ["ABS", "Auto Pilot", "Auto Parking"]
  }

  carSelect(name:string){

    if(name == 'bmw'){
      this.name = 'BMW'
      this.model = 'M5';
      this.speed = 300;
      this.colors = {
        car: 'black',
        salon: 'brown'
      }
    this.options = ["ABS", "Auto Pilot", "Auto Parking"]
    }else if (name == 'audi'){
      this.name = 'Audi'
      this.model = 'RS8';
      this.speed = 250;
      this.colors = {
        car: 'white',
        salon: 'black'
      }
    this.options = ["ABS", "Auto Pilot", "Auto Parking"];
    }else if (name == 'mers'){
      this.name = 'Mercedes Bens'
      this.model = 'S-class';
      this.speed = 350;
      this.colors = {
        car: 'gold',
        salon: 'red'
      }
      this.options = ["ABS", "Auto Pilot", "Auto Parking"];
    }
  }

  addOpt(option:string){
    this.options?.unshift(option);
    // this.options?.push(option);
    return false;
  }
  delOpt(option:string){
    for(let i = 0; i < this.options!.length;i++){
      if(this.options![i] == option){
        this.options?.splice(i, 1);
        break;
      }
    }
  }
}

interface Colors{
  car: string | undefined;
  salon: string | undefined;
}
