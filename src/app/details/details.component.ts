import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: Details = {
    name: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendFeedback(): void {
    const url = 'http://localhost:8080/post';
    this.http.post(url, this.details).subscribe(
      res => {
        console.log(res);
      },
      err => {
        alert('error');
      }
    );
  }

}

export interface Details {
  name: string;
}
