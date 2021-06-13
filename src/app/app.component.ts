import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
    {name: 'yellow', id: 4}
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
