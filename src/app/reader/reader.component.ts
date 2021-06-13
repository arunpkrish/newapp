import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  data: any;
  urlStr = 'https://discussions.apple.com/community/iphone/iphone_hardware?page=';
  pagenumber = '1';
  finalUrlStr = '';
  constructor(private apiCall: ApiCallService) { }

  ngOnInit(): void {

  }

  getPosts(): any{
    this.finalUrlStr = this.urlStr + this.pagenumber;
    this.apiCall.getSiteData(this.finalUrlStr).subscribe((res: any) => {
      this.data = res;
    });
  }

}
