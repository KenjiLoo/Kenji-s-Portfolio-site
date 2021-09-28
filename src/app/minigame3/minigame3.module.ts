import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Minigame3RoutingModule } from './minigame3-routing.module';
import { FlappybirdComponent } from './flappybird/flappybird.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    FlappybirdComponent,
  ],
  imports: [
    CommonModule,
    Minigame3RoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class Minigame3Module { }
