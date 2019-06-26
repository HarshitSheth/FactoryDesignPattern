import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  submitted = false;
  messageForm: FormGroup;
  success = false;
  private loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      className: ['', Validators.required]
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
