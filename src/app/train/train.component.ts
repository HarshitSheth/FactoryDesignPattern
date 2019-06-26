import { Component, OnInit } from '@angular/core';
import {SelectedChoice} from '../selectedChoice';
import {CHOICE, CLASSCHOICE} from '../mockOptions';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  choices: SelectedChoice[] = CHOICE;
  selectedOption: SelectedChoice;
  c: string;
  loading = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(ch: SelectedChoice): void {
    this.loading = true;
    this.selectedOption = ch;
    this.c = ch.choice;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
