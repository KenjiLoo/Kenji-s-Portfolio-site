import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallingballComponent } from './fallingball/fallingball.component';

const routes: Routes = [
  { path:'', component: FallingballComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Minigame1RoutingModule { }
