import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  submitted = false;
  messageForm: FormGroup;
  success = false;
  private loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      coachName: ['', Validators.required],
      seatNumber: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    if (this.messageForm.invalid) {
      this.submitted = false;
      this.success = false;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      return;
    }
    this.submitted = true;
    this.success = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
