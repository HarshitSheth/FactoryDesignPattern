import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { ThirdTierComponent } from './third-tier/third-tier.component';
import { SleeperComponent } from './sleeper/sleeper.component';
import { GeneralComponent } from './general/general.component';
import {SecondTierComponent} from './second-tier/second-tier.component';
import { ReservationComponent } from './reservation/reservation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PassengerNameComponent } from './passenger-name/passenger-name.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { AvailabilityComponent } from './availability/availability.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    ThirdTierComponent,
    SleeperComponent,
    GeneralComponent,
    SecondTierComponent,
    ReservationComponent,
    PassengerNameComponent,
    CancellationComponent,
    AvailabilityComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
