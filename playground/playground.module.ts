import './../tools/assets/playground.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsPhoneModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FirstExampleComponent } from './app/components/first-example/first-example.component';
import { FsExampleModule } from '@firestitch/example';
import { FsFormModule } from '@firestitch/form';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsPhoneModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsFormModule,
    FsExampleModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    FirstExampleComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
