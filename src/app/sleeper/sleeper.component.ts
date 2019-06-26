import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sleeper',
  templateUrl: './sleeper.component.html',
  styleUrls: ['./sleeper.component.css']
})
export class SleeperComponent implements OnInit {

  submitted = false;
  messageForm: FormGroup;
  success = false;
  private loading = false;

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
