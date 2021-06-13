import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'newapp';
  sampletest = 'Test';
  str = '';
  count = 0;
  isHidden = false;
  data = {
    var1: 'text1',
    var2: 'text2',
    var3: 'text3'
  };

  colors = [
    {name: 'blue', id: 1},
    {name: 'red', id: 2},
    {name: 'orange', id: 3},
    {name: 'yellow', id: 4},
    {name: 'green', id: 5},
    {name: 'blue', id: 6},
    {name: 'indigo', id: 7},
    {name: 'violet', id: 8},
  ];
  constructor(private router: Router){}
// it is a good idea to implement the interface OnInit to ensure the method ngOnInit has been properly implemented.
  ngOnInit(): void{
    console.log('insid start');
  }
  clickMe(): void {
    this.sampletest = 'changedTest';
    this.isHidden = true;
    this.count++;
    this.colors.push({name: this.str, id: this.colors.length + 1});
  }

  colorFunction(): string{
    return '#F6FA6B';
  }

  gotoHome(): void{
    this.router.navigate(['Home']);
  }
  gotoProduct(): void{
    this.router.navigate(['Product']);
  }

}
