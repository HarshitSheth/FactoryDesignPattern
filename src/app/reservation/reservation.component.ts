import {Component, Input, OnInit} from '@angular/core';
import {SelectedChoice} from '../selectedChoice';
import {SelectedDropDown} from '../selectdropdown';
import {CLASSCHOICE} from '../mockOptions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  // selectDropDown: SelectedDropDown;
  classChoice: SelectedDropDown[] = CLASSCHOICE;
  dropDownSelect: string;
  loading = false;

  ngOnInit() {

  }

  select(event: any) {
    this.dropDownSelect = event.target.value;
  }
}
