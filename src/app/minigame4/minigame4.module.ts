import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Minigame4RoutingModule } from './minigame4-routing.module';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    TictactoeComponent
  ],
  imports: [
    CommonModule,
    Minigame4RoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class Minigame4Module { }
