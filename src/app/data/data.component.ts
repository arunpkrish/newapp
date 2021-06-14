import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  result = '';
  post = {
     title: '',
     content: ''
  };

  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {
  }

  onsubmit(): void{
    alert(JSON.stringify(this.post));
    this.apiCall.savePost(JSON.stringify(this.post)).subscribe((res: any) => {
      this.result = JSON.stringify(res);
    });
  }

}
