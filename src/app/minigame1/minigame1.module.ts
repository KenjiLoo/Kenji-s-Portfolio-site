import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Minigame1RoutingModule } from './minigame1-routing.module';
import { FallingballComponent } from './fallingball/fallingball.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    FallingballComponent
  ],
  imports: [
    CommonModule,
    Minigame1RoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class Minigame1Module { }
