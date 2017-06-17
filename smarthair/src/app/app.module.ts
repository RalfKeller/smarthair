import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ExpansionPanelsModule } from 'ng2-expansion-panels';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule, MaterialModule, MdButtonModule, MdCheckboxModule, MdCardModule, MdSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PlzComponent } from './plzComponent/plz.component';
import { PacketComponent } from './packetComponent/packet.component';
import { ListComponent } from './listComponent/list.component';
import { ZeitComponent } from './zeitComponent/zeit.component';
import { CompanyCardComponent } from './companyCardComponent/companycard.component';
import { BookingComponent } from './bookingComponent/booking.component';
import { FinalComponent } from './finalComponent/final.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/plz', pathMatch: 'full'},
  {path: 'plz', component: PlzComponent},
  {path: 'packet', component: PacketComponent},
  {path: 'list', component: ListComponent },
  {path: 'zeit', component: ZeitComponent },
  {path: 'booking', component: BookingComponent },
  {path: 'final', component: FinalComponent},
];

@NgModule({
  declarations: [
    PacketComponent,
    PlzComponent,
    AppComponent,
    ListComponent,
    ZeitComponent,
    CompanyCardComponent,
    BookingComponent,
    FinalComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdSidenavModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ExpansionPanelsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
