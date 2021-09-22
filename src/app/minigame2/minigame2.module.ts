import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Minigame2RoutingModule } from './minigame2-routing.module';
import { TrexrunComponent } from './trexrun/trexrun.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    TrexrunComponent
  ],
  imports: [
    CommonModule,
    Minigame2RoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class Minigame2Module { }
