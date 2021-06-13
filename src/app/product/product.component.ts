import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private apiCallService: ApiCallService) { }
  dataArray: any;
  colors = [
    {name: 'blue', id: 1},
    {name: 'red', id: 2}
  ];
  ngOnInit(): void {

    this.apiCallService.getData().subscribe((res: any) => {
      this.dataArray = res;
      console.log(res);
    });
  }

}


