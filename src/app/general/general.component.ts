import {Component, Input, OnInit} from '@angular/core';
import {ReservationComponent} from '../reservation/reservation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  submitted = false;
  messageForm: FormGroup;
  success = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      passengerName: ['', Validators.required]
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
