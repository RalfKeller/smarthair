import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PlzComponent } from './plzComponent/plz.component';
import { PacketComponent } from './packetComponent/packet.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/plz', pathMatch: 'full'},
  {path: 'plz', component: PlzComponent},
  {path: 'packet', component: PacketComponent}
];

@NgModule({
  declarations: [
    PacketComponent,
    PlzComponent,
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
